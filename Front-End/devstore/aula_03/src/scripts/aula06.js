// 1. Selecionamos o elemento (Aula 5)
const btn = document.querySelector('.btn-pedido');

// 2. Adicionamos o 'ouvinte' (Evento, Função)
btn.addEventListener('click', function() {
// LINHA A LINHA: Quando o clique ocorrer, este bloco será executado
console.log("O vigia detectou um clique no botão!");
btn.textContent = "Processando...";
});

const inputQtdLasanha = document.querySelector('#qtd-lasanha')
const textoPreco = document.querySelector('#preco-lasanha')

if (inputQtdLasanha && textoPreco){
    inputQtdLasanha.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total = Number(inputQtdLasanha.value) * precoUnitario
        textoPreco.textContent = `R$ ${total.toFixed(2)}`

        textoPreco.style.color = total >150 ? "#c0392b" : "#e67e22"

    })
}

// 3. Adicionando ouvinte compartilhado (classe) EVENT.TARGET
const massas = document.querySelector("#secao-massas")
massas.addEventListener('click', (event) => {
    const clicado = event.target

    if (clicado.classList.contains('btn-pedido')){
        console.log("Você clicou em um botão de pedido de MASSA!")
    }
}) //isso/ele escuta a ação 

// 4. EVENTO de clique para todos os botões - Modelo Geral QuerySelectorALL
const botoesPedido = document.querySelector('.btn-pedido')
botoesPedido.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.preventDefault()

        // Efeito visual no botão após clique
        botao.textContent = "Pedido enviado"
        botao.style.backgroundColor = "red"

        botao.disable = true
    })
})

// 5. Ações interatividade Cards
const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
    card.addEventListener("mouseenter", () =>{
        card.style.transform = "translateY-(5px)"
        card.style.boxShadow = "0 10px 20px #1111"
    })
    // Saída
    card.addEventListener("mouseleave", () => {
        card.style.tranform = "translateY(0)"
        card.style.boxShadow = "none"
    })
})