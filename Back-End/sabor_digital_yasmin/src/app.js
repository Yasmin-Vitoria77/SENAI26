//papel do APP.JS = controlar as rotas(-> interação com o front end)

const express = require('express')
//const pool = require('./config/database')
const routes= require('./routes')

const app= express()

app.use(express.json())

app.use('/', routes)//centralizando requisições para a pasta de routes

module.exports = app

const queryAsync = (sql, values = []) => {
    return new Promise((resolve, reject) =>{
        pool.query(sql, values, (err, results) =>{
            if(err) reject(err)
            else resolve(results)
        })
    })
}

app.get('/', (req, res) => {
    res.send('API Sabor & Saber está funcionando!')
})

app.get('/produtos', async (req, res) => {
    try{
        const produtos = await queryAsync ('SELECT * FROM produto')
        res.json({
            sucesso: true,
            dados: produtos,
            total: produtos.length
        })
    } catch (erro){
        console.error('Erro ao listar os produtos: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao listar produtos',
            erro: erro.message
        })
    }
})


app.get('/produtos/:id', async (req, res)  => {
    try{
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID inexistente'
            })
        }

        const produtos = await queryAsync ('SELECT * FROM produto WHERE id = ?', [id])

        if(produtos.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Produto não encontrado'
            })
        }

        res.json({
            sucesso: true,
            dados: produtos[0]
        })
    } catch (erro){
        console.error('Erro ao buscar produto por ID: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar produto',
            erro: erro.message
        })
    }
})


app.post('/produtos', async (req, res) => {
    try{
        const {nome, descricao, preco, disponivel} = req.body

        if(!nome || !descricao || !preco || disponivel == undefined){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Nome, desrição, preço e disponibilidade são campos obrigatórios."
            })
        }

        if (typeof preco !== 'number' || preco <= 0){
            return res.status(400).json({
                sucesso: false, 
                mensagem: "O preço tem que ser maior que 0"
            })
        }

        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim(),
            preco: preco,
            disponivel: disponivel
        }

        const resultado = await queryAsync ('INSERT INTO produto SET ?', [novoProduto])

        res.status(201).json({
            sucesso: true,
            mensagem: "Produto criado com sucesso, vá conferir no GET",
            id: resultado.insertId
        })
    } catch (erro){
        console.error('Erro ao cadastrar produto: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao cadastrar produto',
            erro: erro.message
        })
    }
})


app.put("/produtos/:id", async (req, res) => {
    try{
        const {id} = req.params
        const {nome, descricao, preco, disponivel} = req.body

        if (!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de produto inválido'
            })
        }

        const produtoExistente = await queryAsync('SELECT * FROM produto WHERE id = ?' [id])

        if(produtoExistente.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Produto não encontrado'
            })
        }

        const produtoAtualizado = {}
        if(nome !== undefined) produtoAtualizado.nome = nome.trim()
        if(descricao !== undefined) produtoAtualizado.descricao = descricao.trim()
        if(typeof preco !== 'number' || preco <= 0)
            return res.status(400).json({
                sucesso: false,
                mensagem: "Preço deve ser número"
            })
            produtoAtualizado.preco = preco

        if(disponivel !== undefined) produtoAtualizado.disponivel = disponivel

        if(Object.keys(produtoAtualizado).length === 0){
        return res.status(400).json({
            sucesso: false,
            mensagem: "Nenhum campo para atualizar"
        })
    }

    await queryAsync('UPDATE produto SET ? WHERE ?', [produtoAtualizado, id])
    res.json({
        sucesso: true,
        mensagem: "Produto atualizado! Teste"
    })
    } catch (erro){
        console.error('Erro ao atualizar produto: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao atualizar produto",
            erro: erro.message
        })
    }
})

app.delete('/produtos/:id', async (req, res) => {
    try{
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de produto inválido'
            })
        }

        const produtoExistente = await queryAsync ('SELECT * FROM produto WHERE id = ?', [id])

        if(produtoExistente.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Produto não encontrado...'
            })
        }

        await queryAsync ('DELETE FROM produto WHERE id = ?', [id])
        res.json({
            sucesso: true,
            mensagem: "Produto deletado com sucesso! Vá verificar"
        })
    } catch (erro){
        console.error('Erro ao deletar produto: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao apagar produto",
            erro: erro.message
        })
    }
})

module.exports= app