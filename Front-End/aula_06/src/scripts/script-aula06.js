// const clique = document.querySelector('#contador')
// const botao = document.querySeelector('#btn-pedir')

// clique.addEventListener('click', function() {
//     const converter  = 
// })
// NÃO SEI FAZER

const escrita = document.querySelector ('.card-acao')
escrita.addEventListener('keyup', () => {
    escrita.value
})

const caixa = document.querySelector('#caixa-cor')
caixa.addEventListener('mouseover', () => {
    caixa.style.backgroundColor = 'blue';
})

caixa.addEventListener('mouseout', () => {
    caixa.style.backgroundColor = 'grey';
})

//1º Exercício - adicionar curtida
const clique = document.querySelector ('#contador')
const contador = document.querySelector ('#btn-pedir')

if (contador && clique){
           let contagem = 0
            contador.addEventListener('click', function () {
                        contagem++
                        clique.textContent - `${contagem}`
             })
}
// contagem++ → contagem = contagem + 1


//Formulario input
const qtd = document.querySelector('#qtd-item');
const totalTxt = document.querySelector('#total');

// Calcular preço enquanto o usuário muda a quantidade
qtd.addEventListener('input', () => {
// Conversão
const valor = Number(qtd.value) * 45.00;

// Atualizando o texto na tela
totalTxt.textContent = `Total: R$ ${valor.toFixed(2)}`
;

});

//Troca texto
const inputNome = document.querySelector('#campo-nome');
// Pega o valor a cada letra digitada
inputNome.addEventListener('keyup', () => {
// O .value captura o texto atual após tecla subir
let texto = inputNome.value;
console.log("O usuário está digitando: " + texto);
});