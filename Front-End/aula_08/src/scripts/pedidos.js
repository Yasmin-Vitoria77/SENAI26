const btnLimpar = document.querySelector("#btn-limpar")

if(btnLimpar){
    btnLimpar.addEventListener("click", () => {
        const listaResumo = document.querySelector("#lista-resumo")
        const secaoResumo = document.querySelector("#secao-resumo")


    // Remover os badge que CRIAMOS NO JS (não tem no HTML)
    document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove())


    // Remover os filhos dessa lista
    while(listaResumo.firstElementChild){
        listaResumo.firstElementChild.remove()
    } 

    secaoResumo.style.display = "none"

    })
}