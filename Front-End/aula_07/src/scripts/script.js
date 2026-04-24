const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
};

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

// Adicionar e remover quantidades itens
const main = document.querySelector("main")
main.addEventListener("click", (event) =>{
    //vai pegar o cara que fez a ação de clique e vai guardar a informação
    const clicado = event.target

    if(clicado.classList.contains("btn-menos")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)
        spanQtd.textContent = Math.max(1, valorAtual - 1)
        atualizarPrecoCard(box)
        return
    }

    if(clicado.classList.contains("btn-mais")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent) +1
        atualizarPrecoCard(box)
        return
    }

    // Solicitar pedido - Item
    if(clicado.classList.contains("btn-pedido")){
        event.preventDefault()
        const card = clicado.parentElement
        const nomePrato = card.querySelector("h3").textContent
        const quantidade = card.querySelctor(".qtd-valor").textContent
        const precoExibido = card.querySelector(".preco".textContent)

        clicado.textContent = "Adicionado ✓"
        clicado.style.backgroundColor = "#27ae60"
        clicado.disable = true

        setTimeout(() => {
            clicado.textContent = "Pedir agora"
            clicado.style.backgroundColor = ""
            clicado.disable = false
        }, 1500)

        if(!card.querySelector(".badge-adicionado")){
            card.insertAdjacentHTML(
                "beforeend",
                "<span class='badge-adicionado'> No resumo ✓</span>"
            )
        }

        //Função  para inserir as infromações do prato no "carrinho"
        adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)

        function atualizarPrecoCard(box){
            const card = box.parentElement
            const spanPreco = card.querySelector(".preco")
            const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
            const quantidade = Number(box.querySelector(".qtd-valor").textContent)
        }
        // Continua......
    }
})