document.addEventListener("DOMContentLoaded", function(){
    renderizarPedidos();
    configurarLimparPedidos();
}); //toda vez que carrega a página espera o 100% dela

function renderizarPedidos(){
    const lista = document.querySelector("#lista-pedidos");
    const spanTotal = document.querySelector("#valor-total");
    const spanResumo = document.querySelector("#valor-total-resumo");
    const spanContador = document.querySelector("#contador-itens");
    //span = alterações pequenas em textos menores

    if(!lista) return; 

    const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]"); //pega do localstorage em string - JSON.parse
    //esse "array" evita erros

    if(pedidos.length === 0){
        lista.innerHTML =
        "<li class='pedido-vazio'> Nenhum pedido ainda. Acesso o " + "<a href='index.html'>Cardápio </a> para adicionar!😀 </li>";

        if(spanTotal) spanTotal.textContent = "R$0,00";
        if(spanResumo) spanResumo.textContent = "R$0,00";
        if(spanContador) spanContador.textContent = "0 itens";
        return;
        //inserindo tag HTML dentro daquela lista (OL - lista ordenada)
    } // final IF limpar pedidos

    lista.innerHTML = "";
    let total = 0 ;

    pedidos.forEach(function (pedido, indice){
        const li = document.createElement("li");
        li.classList.add("item-pedido");

        const textoSpan = document.createElement("span");
        textoSpan.innerHTML =
        "<strong>" + pedido.nome + "</strong>" + " - " + pedido.qtd + " x" + 
        " R$ " + pedido.preco.toFixed(2).replace(".", ",") + " = <span class='subtotal-item'> R$ " + pedido.subtotal.toFixed(2).replace(".",",") + "</span>";

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("btn-remover-item");

        btnRemover.addEventListener("click", function(){
            const lista = JSON.parse(
                localStorage.getItem("techfood_pedidos") || "[]"
            );

            lista.splice(indice, 1);
            localStorage.setItem("techfood_pedidos", JSON.stringify(lista)); //localStorage recebe como string
            renderizarPedidos();
        }); // fim do botão remover

        li.appendChild(textoSpan);
        li.appendChild(btnRemover);
        lista.appendChild(li);

        //somando valor do total ao adicionar novo item
        total += pedido.subtotal;

        const totalFmt = "R$ " + total.toFixed(2).replace(".",",");
        if(spanTotal) spanTotal.textContent = totalFmt;
        if(spanResumo) spanResumo.textContent = totalFmt;

        const totalItens = pedidos.reduce(function (acc, p){
            return acc + p.qtd
        }, 0);

        if(spanContador){
            spanContador.textContent = 
             totalItens + (totalItens === 1 ? " item": " itens");
        }
    });
}


function configurarLimparPedidos(){
    const btn = document.querySelector("#btn-limpar-pedidos");

    if(!btn) return;

    btn.addEventListener("click", function(){
        localStorage.removeItem("techfood_pedidos"); //remove lista inteira
        renderizarPedidos();
    });
}


// const btnLimpar = document.querySelector("#btn-limpar")

// if(btnLimpar){
//     btnLimpar.addEventListener("click", () => {
//         const listaResumo = document.querySelector("#lista-resumo")
//         const secaoResumo = document.querySelector("#secao-resumo")


//     // Remover os badge que CRIAMOS NO JS (não tem no HTML)
//     document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove())


//     // Remover os filhos dessa lista
//     while(listaResumo.firstElementChild){
//         listaResumo.firstElementChild.remove()
//     } 

//     secaoResumo.style.display = "none"

//     })
// }
