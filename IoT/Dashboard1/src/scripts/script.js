// ==========================================================================
// CONFIGURAÇÃO DO BROKER MQTT
// ==========================================================================
// Nota: Em navegadores, a conexão DEVE ser via WebSockets seguros (wss)
const MQTT_CONFIG = {
    brokerUrl: 'wss://broker.hivemq.com:8000/mqtt', // Substitua pelo seu broker se necessário
    options: {
        clientId: 'smart_pebolim_dash_' + Math.random().toString(16).substr(2, 8),
        clean: true,
        connectTimeout: 4000,
    }
};

// ==========================================================================
// MAPEAMENTO DE TÓPICOS
// ==========================================================================
const TOPICS = {
    // Dados recebidos do Pebolim (Inbound)
    scoreGreen: 'smartpebolim/jogo/placar/verde',
    scoreRed: 'smartpebolim/jogo/placar/vermelho',
    gameStatus: 'smartpebolim/jogo/status',
    statDuration: 'smartpebolim/estatisticas/duracao',
    statLaunches: 'smartpebolim/estatisticas/lancamentos',
    statEfficiency: 'smartpebolim/estatisticas/eficiencia',
    statMvp: 'smartpebolim/estatisticas/mvp',
    sensorBall: 'smartpebolim/sensores/capacitivo',
    sensorPirLeft: 'smartpebolim/sensores/pir_esquerdo',
    sensorPirRight: 'smartpebolim/sensores/pir_direito',
    actuatorStepper: 'smartpebolim/atuadores/passo',
    
    // Comandos enviados do Dashboard (Outbound)
    controlRestart: 'smartpebolim/controle/reiniciar',
    controlClear: 'smartpebolim/controle/limpar',
    controlTrain: 'smartpebolim/controle/treino',
    controlLed: 'smartpebolim/controle/led',
    controlBuzzer: 'smartpebolim/controle/buzzer',
    controlDisplay: 'smartpebolim/controle/display'
};

// ==========================================================================
// SELEÇÃO DOS ELEMENTOS DO DOM (HTML)
// ==========================================================================
const DOM = {
    statusBadge: document.querySelector('.status-badge'),
    statusDot: document.querySelector('.status-badge .dot'),
    scoreGreen: document.querySelector('.team-green .score'),
    scoreRed: document.querySelector('.team-red .score'),
    waitingBadge: document.querySelector('.waiting-badge'),
    
    // Estatísticas (Mapeadas por ordem de aparição no grid)
    statBoxes: document.querySelectorAll('.stat-box .value'),
    
    // Controles do Menu Rápido
    btnRestart: document.querySelectorAll('.menu-btn')[0],
    btnClear: document.querySelectorAll('.menu-btn')[1],
    btnTrain: document.querySelectorAll('.menu-btn')[2],
    
    // Sensores Badges
    sensorBadges: document.querySelectorAll('.sensor-box .badge'),
    
    // Atuadores
    stepperValue: document.querySelector('.actuator-row .a-value'),
    ledSwitch: document.querySelector('.switch input'),
    btnBuzzer: document.querySelector('.btn-trigger'),
    displayInput: document.querySelector('.display-input')
};

// ==========================================================================
// CONEXÃO E EVENTOS MQTT
// ==========================================================================
console.log("Tentando conectar ao broker MQTT...");
const client = mqtt.connect(MQTT_CONFIG.brokerUrl, MQTT_CONFIG.options);

client.on('connect', () => {
    console.log('Conectado com sucesso ao Broker MQTT!');
    atualizarStatusInterface(true);

    // Se inscreve em todos os tópicos de leitura de dados
    Object.keys(TOPICS).forEach(key => {
        if (!key.startsWith('control')) {
            client.subscribe(TOPICS[key], (err) => {
                if (!err) console.log(`Inscrito no tópico: ${TOPICS[key]}`);
            });
        }
    });
});

client.on('error', (err) => {
    console.error('Erro de conexão MQTT: ', err);
    atualizarStatusInterface(false);
});

client.on('close', () => {
    console.log('Conexão com o Broker encerrada.');
    atualizarStatusInterface(false);
});

// ==========================================================================
// TRATAMENTO DE MENSAGENS RECEBIDAS (Atualizando a Tela)
// ==========================================================================
client.on('message', (topic, message) => {
    const payload = message.toString();
    
    switch (topic) {
        case TOPICS.scoreGreen:
            DOM.scoreGreen.textContent = payload;
            break;
        case TOPICS.scoreRed:
            DOM.scoreRed.textContent = payload;
            break;
        case TOPICS.gameStatus:
            DOM.waitingBadge.textContent = payload;
            break;
        case TOPICS.statDuration:
            DOM.statBoxes[0].textContent = payload; // Duração
            break;
        case TOPICS.statLaunches:
            DOM.statBoxes[1].textContent = payload; // Lançamentos
            break;
        case TOPICS.statEfficiency:
            DOM.statBoxes[2].textContent = payload; // Eficiência
            break;
        case TOPICS.statMvp:
            DOM.statBoxes[3].textContent = payload; // MV-Player
            break;
        case TOPICS.sensorBall:
            alternarBadgeSensor(DOM.sensorBadges[0], payload);
            break;
        case TOPICS.sensorPirLeft:
            alternarBadgeSensor(DOM.sensorBadges[1], payload);
            break;
        case TOPICS.sensorPirRight:
            alternarBadgeSensor(DOM.sensorBadges[2], payload);
            break;
        case TOPICS.actuatorStepper:
            DOM.stepperValue.textContent = payload.includes('°') ? payload : `${payload}°`;
            break;
    }
});

// ==========================================================================
// INTERAÇÕES DO USUÁRIO (Enviando Comandos para o Broker)
// ==========================================================================

// Botões do Menu Rápido
DOM.btnRestart.addEventListener('click', () => {
    client.publish(TOPICS.controlRestart, 'RESTART');
});

DOM.btnClear.addEventListener('click', () => {
    client.publish(TOPICS.controlClear, 'CLEAR');
});

DOM.btnTrain.addEventListener('click', () => {
    client.publish(TOPICS.controlTrain, 'TOGGLE_TRAIN');
});

// Toggle Switch dos LEDs
DOM.ledSwitch.addEventListener('change', (e) => {
    const status = e.target.checked ? 'ON' : 'OFF';
    client.publish(TOPICS.controlLed, status);
    
    // Atualiza o texto do lado do switch para feedback imediato
    const label = DOM.ledSwitch.closest('.toggle-container').querySelector('span');
    if (label) label.textContent = status;
});

// Botão de Trigger do Buzzer
DOM.btnBuzzer.addEventListener('click', () => {
    client.publish(TOPICS.controlBuzzer, 'TRIGGER');
});

// Input de texto do Display (Envia ao pressionar 'Enter' ou sair do campo)
DOM.displayInput.addEventListener('change', (e) => {
    client.publish(TOPICS.controlDisplay, e.target.value);
});


// ==========================================================================
// FUNÇÕES AUXILIARES DE INTERFACE
// ==========================================================================

// Altera visualmente o Badge de Conexão do Sistema (Header)
function atualizarStatusInterface(online) {
    if (online) {
        DOM.statusBadge.style.backgroundColor = 'var(--teal-light)';
        DOM.statusBadge.style.color = 'var(--teal-primary)';
        DOM.statusDot.style.backgroundColor = 'var(--teal-primary)';
        DOM.statusBadge.innerHTML = '<div class="dot"></div> SISTEMA ONLINE';
    } else {
        DOM.statusBadge.style.backgroundColor = 'var(--pink-light)';
        DOM.statusBadge.style.color = 'var(--pink-primary)';
        DOM.statusDot.style.backgroundColor = 'var(--pink-primary)';
        DOM.statusBadge.innerHTML = '<div class="dot" style="background-color: var(--pink-primary)"></div> SISTEMA OFFLINE';
    }
}

// Altera o estado dos sensores entre Ativo (Teal) / Inativo (Cinza)
function alternarBadgeSensor(element, status) {
    const ativo = status.toUpperCase() === 'ATIVO' || status === '1' || status.toUpperCase() === 'ON';
    if (ativo) {
        element.textContent = 'Ativo';
        element.classList.remove('inactive');
        element.classList.add('active');
    } else {
        element.textContent = 'Inativo';
        element.classList.remove('active');
        element.classList.add('inactive');
    }
}