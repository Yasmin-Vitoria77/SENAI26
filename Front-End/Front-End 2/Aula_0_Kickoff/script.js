class Prato{
  constructor(nome, preco, categoria){ // Definir o que sua class vai ter
    this.nome = nome // this = apontar - coloca informações
    this.preco = preco // o que tinha no constructor, sem o this, ao final, tudo vai sumir 
    this.categoria = categoria
  }

  // Método (ação que ele vai executar)
  formatarPreco(){
    return `R$ ${this.preco.toFixed(2).replace('.',',')}` // troco ponto por vírgula
  }

  aplicarDesconto(percentual){
    this.preco = this.preco * (1 - percentual/100)
  }
} // Fim da classe

const cardapio = [
  new Prato("Feijoada Completa", 42.90, "Prato Principal"),
  new Prato("Moqueca de Peixe", 58.00, "Prato Principal"),
  new Prato("Coxinha artesanal", 8.50, "Petisco"),
  new Prato("Brigadeiro Gourmet", 6.00, "Sobremesa"),
  new Prato("Morango do Amor (Pistache)", 15.00, "Sobremesa"),
  new Prato("Suco de maracujá", 12.00, "Bebida"),
]

// Pra aparecer no console
console.log("=== Pratos criados ===")
cardapio.forEach(p => { // o "p" pode ser qualquer coisa
  console.log(`${p.nome} -> ${p.formatarPreco()}`)
})

const containerCardapio = document.querySelector("#cardapio")

function criarCardPrato(prato){
  const card = document.createElement('div')
  card.className = 'card'

  card.innerHTML =
  `
  <h3>${prato.nome}</h3>
  <span class="categoria">${prato.categoria}</span>
  <div class="preco">${prato.formatarPreco()}</div>
  `

  card.addEventListener('click', () => {
    alert(
      `
     🍽️ ${prato.nome} \n 
     Categoria: ${prato.categoria} \n
     Preço: ${prato.formatarPreco()}
      `
    ) // POP UP - não sai com OK
      // n = dá um espaço no POP UP
  })

  return card
} // Fim da função Criar Prato

function renderizarCardapio(){
  containerCardapio.innerHTML = '' // Vazio

  cardapio.forEach(prato => {
    const card = criarCardPrato(prato)

    containerCardapio.appendChild(card) // Inserção de pratos
  })
} // Fim função Renderizar Cardápio

renderizarCardapio()

// Eu aplico o desconto no primeiro item da lista ([0]) - NÃO MUDA NO CONSOLE
// Renderizo de novo porque houve uma mudança
cardapio[0].aplicarDesconto(20) 
renderizarCardapio()

class Bebida{
  constructor(nome, preco, volume){
    this.nome = nome
    this.preco = preco
    this.volume = volume
  }

  descricao(){
    return `${this.nome} - ${this.volume}ml - RS${this.preco}`
  }
}

const cardapioBebidas = [
  new Bebida ("Coca-Cola", 15.00, 2000),
  new Bebida("Fnta Uva", 12.00, 1500)
]

console.log("=== Bebidas criadas ===")
cardapioBebidas.forEach(b => { // o "p" pode ser qualquer coisa
  console.log(`${b.formatarDescricao()}`)
})