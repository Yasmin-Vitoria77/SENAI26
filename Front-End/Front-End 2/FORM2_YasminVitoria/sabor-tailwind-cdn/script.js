class Prato {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    formatarPreco() {
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
    }

}
const pratos = [
    new Prato('Feijoada Completa', 42.90, 'Prato Principal'),
    new Prato('Coxinha Artesanal', 8.50, 'Petisco'),
    new Prato('Brigadeiro Gourmet', 6.00, 'Sobremesa'),
];

function criarCard(prato) {
    const card = document.createElement("article");

    card.className = [
        "bg-white rounded-xl shadow-sm",
        "p-4 flex flex-col h-full",
        "border border-gray-200",
        "hover:-translate-y-1 transition-transform cursor-pointer",
    ].join(" ");
    card.innerHTML = `
    <!-- text-xl font-bold = Bootstrap: card-title fw-bold -->
    <h3 class="text-xl font-bold mb-1">${prato.nome}</h3>
    <!-- text-gray-500 text-sm = Bootstrap: card-text text-muted --><p class="text-gray-500 text-sm mb-3">${prato.categoria}</p>
    <!-- text-green-600 font-bold = Bootstrap: text-success fw-bold -->
    <p class="text-green-600 font-bold text-lg mb-4">
    ${prato.formatarPreco()}
    </p>
    <!-- mt-auto = empurra o botão pro fundo = Bootstrap: card-footer -->
    <button class="mt-auto w-full bg-red-700 text-white
    font-bold py-2 rounded-lg
    hover:bg-red-800 transition-colors">
    Pedir Agora
    </button>
    `;
    return card;
}

const container = document.querySelector("#containerPratos");
pratos.forEach((p) => container.appendChild(criarCard(p)))