const ProdutoRepository = require('../repositories/ProdutoRepository')

class ProdutoService{
    async listarProdutos(){
        const listaProdutos = await ProdutoRepository.listarTodosProdutos()
        return {
            sucesso: true,
            dados: listaProdutos
            //total: listaProdutos.length
        }
    }
    async buscarProdutoPorId(id){
        if(!id || isNaN(id)){
            //abrindo uma excessão, encerrando a continuação do código e retornando erro
            //se for diferente de id || não for número
            throw{ status: 400,
                   mensagem: "ID inválido"
            }
        } 

        const produto = await ProdutoRepository.buscarPorId(id)
        if(!produto){
            throw{ status: 404,
                   mensagem: "Produto não encontrado"
            }
        } 

        return{
            sucesso: true,
            dados: produto
        }
    }
    async cadastrarProduto(dados){ //isso aí é meu body
        const {nome, descricao, preco, categoria, disponivel} = dados

        if(!nome || !descricao || preco === undefined){
            throw { status: 400,
                    mensagem: "Nome, descrição ou preço não foram preenchidos"
            }
        }
        if(typeof preco !== 'number' || preco <=0){
            throw{ status: 400,
                   mensagem: "Preço deve ser número positivo"
            }
        }

        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim(),
            preco,
            categoria: categoria || null,
            disponivel: disponivel ?? true
        }
        const id = await ProdutoRepository.cadastrarNovoProduto(novoProduto)
        return {
            sucesso: true,
            mensagem: "Produto cadastrado",
            id
        }
    }
    async atualizarProduto(id, dados){
        if(!id || isNaN(id)){
            throw { status: 400,
                    mensagem: "ID inválido"
            }
        }
        const produto = await ProdutoRepository.buscarPorId(id)
        
        if(!produto){
            throw{ status: 404,
                   mensagem: "Produto não encontrado"
            }
        }

        const produtoAtualizado = {}
        const {nome, descricao, preco, categoria, disponivel} = dados

        if(nome !== undefined) produtoAtualizado.nome = nome.trim()
        if(descricao !== undefined) produtoAtualizado.descricao = descricao.trim()
        if(preco !== undefined){
            if(typeof preco !== 'number' || preco <= 0){
                throw{ status: 400,
                       mensagem: "Preço preenchido incorretamente: deve ser maior que 0"
                }
            }
            produtoAtualizado.preco = preco
        }
        if(categoria !== undefined) produtoAtualizado.categoria = categoria
        if(disponivel !== undefined) produtoAtualizado.disponivel = disponivel
        if(Object.keys(produtoAtualizado).length ===0){
            throw{ 
                status: 400,
                mensagem: "Nenhum dado para se atualizar"
            }
        }
        await ProdutoRepository.atualizarProdutoPorId(id, produtoAtualizado)
        return{
            sucesso: true,
            mensagem: "Produto atualizado com sucesso"
        }
    }
    async deletarProduto(id){
        if(!id || isNaN(id)){
            throw{ status: 400,
                   mensagem: "ID inválido"
            }
        }
        const produto = await ProdutoRepository.buscarPorId(id)
        if(!produto){
            throw{ status: 404,
                   mensagem: "Produto não encontrado"
            }
        }

        await ProdutoRepository.deletarProdutoPorId(id)
        return{
            sucesso: true,
            mensagem: "Produto apagado com sucesso"
        }
    }
}

module.exports = new ProdutoService()
//as validações são dentro do service
//a validação de ERRO (try/catch) já foi feita na controller