const tituloNhoque = document.querySelector('#card-nhoque h3')

//const botoesCompra = document.querySelector('.btn-pedido')
const botoesCompra = document.querySelectorALL('.btn-pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')

console.log("1. Mostrando o título NHOQUE (pelo ID", tituloNhoque)

console.log("2. Quantidade de botões de pedido: ", botoesCompra.length)

console.log("3. O quarta posição do class.card", terceiroCard)

const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]')

const nomeCompleto = document.querySelector('#nome')

if (tituloNhoque){
    console.log("Título CAPTURADO: ", tituloNhoque.innerText)
}

const saudacao = document.querySelector('#boas-vindas')

//Alterando imagem a baixo
const imagem_card_um = document.querySelector('#foto-destaque')

const agora = new Date()
const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "bem vindo,bom almoço" : "Bem vindo, boa janta"

nomeCompleto.innerHTML = "<strong>Yasmin</strong>  <em>Vitória</em> do Nascimento Ramos"

imagem_card_um.src = 'esgotado.jpg'

const foto = document.querySelector('#foto-destaque')

const caminhoAtual = foto.getAttribute('src')

foto.setAttribute('src', 'src/images/esgotado.jpg')

foto.setAttribute('alt', 'Prato esgotado!')