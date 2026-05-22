//a conversa vai ser aqui
const BASE_URL = "http/localhost:3000"

// Fazer a busca dos produtos
async function buscarProduto(){
    const response = await fetch(`${BASE_URL}/produtos`)
    const dados = await response.json()
    if(!response.ok) throw new Error(dados.erro || `Erro $ {response.status}`)
    return dados.dados
}

// Criar os pedidos
async function criarPedido(cliente, itens){
    const response = await fetch(`${BASE_URL}/pedidos`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({cliente, itens}),
    })
    const dados = await response.json()
    if(!response.ok) throw new Error(dados.erro || `Erro $ {response.status}`)
    return dados
}

// Buscar os pedidos que foram inseridos no banco
async function buscarPedidos(){
    const response = await fetch(`${BASE_URL}pedidos`)
    const dados = await response.json()

    if(!response.ok) throw new Error(dados.erro || `Erro $ {response.status}`)
    return dados
}

// Deletar pedidos do banco de dados
async function deletarPedido(id){
    const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
        method: "DELETE",
    })
    const dados = await response.json()
    if(!response.ok) throw new Error(dados.erro || `Erro $ {response.status}`)
    return dados
}

// Atualizar o status do pedido para a cozinha
async function atualizarStatusPedido(id, novoStatus){
    const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({status: novoStatus}),
    })
    const dados = await response.json()
    if(!response.ok) throw new Error(dados.erro || `Erro $ {response.status}`)
    return dados
}