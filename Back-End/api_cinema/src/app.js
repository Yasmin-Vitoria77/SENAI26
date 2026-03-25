const express = require('express')
const pool = require('./config/database')

const app= express()

app.use(express.json())

const queryAsync = (sql, values = []) => {
    return new Promise((resolve, reject) =>{
        pool.query(sql, values, (err, results) =>{
            if(err) reject(err)
            else resolve(results)
        })
    })
}

app.get('/', (req, res) =>{
    res.send('API cinema está funcionando!!')
})

app.get('/filmes', async (req, res) => {
    try{
        const filmes = await queryAsync('SELECT * FROM filme')
        res.json({
            sucesso: true,
            dados: filmes,
            total: filmes.length
        })
    } catch (erro) {
        console.error('Erro ao listar filmes: ', erro)
        res.status(500).json({
            sucesso: false, 
            mensagem: 'Erro ao listar filmes',
            erro: erro.message
        })
    }
})

app.get('/filmes/:id', async (req, res) => {
    try{
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false, 
                mensagem: 'ID de filme inválido.'
            })
        }

        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

        if(filme.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado'
            })
        }
        
        res.json({
            sucesso: true,
            dados: filme[0]
        })
    } catch (erro){
        console.error('Erro ao buscar filme: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar filme',
            erro: erro.message
        })
    }
})


// || = OU
app.post('/filmes', async (req, res) =>{
    try{
        const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

        if(!titulo || !genero || !duracao || titulo == ' '){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Título, genero e duração são obrigatórios."
            })
        }
        // string "number" - comparando se a palavra que tá no título é number
        if(typeof duracao !== 'number' || duracao <= 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Duração deve ser um número positivo"
            })
        }

        const novoFilme = {
            titulo: titulo.trim(),
            genero: genero.trim(),
            duracao: duracao,
            classificacao: classificacao || null,
            data_lancamento: data_lancamento || null
        }
        //trocando query sql dentro do código
        const resultado = await queryAsync('INSERT INTO filme SET ?', [novoFilme])

        res.status(201).json({
            sucesso: true,
            mensagem: "Filme criado com sucesso",
            id: resultado.insertId
        })
    } catch (erro){
        console.error("Erro ao cadastrar filme: ", erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao cadastrar filme',
            erro: erro.message
        })
    }
})

app.put("/filmes/:id", async (req, res) =>{
    try{
        const {id} = req.params
        const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false, 
                mensagem: 'ID de filme inválido.'
             })
            }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

         if(filmeExiste.length === 0){
             return res.status(404).json({
                 sucesso: false,
                 mensagem: 'Filme não encontrado'
             })
         }

         const filmeAtualizado = {}
         if(titulo !== undefined) filmeAtualizado.titulo = titulo.trim() // atualizar apenas o campo que tá preenchido
         if(genero !== undefined) filmeAtualizado.genero = genero.trim()
         if(duracao !== undefined) {
            if(typeof duracao !== 'number' || duracao <= 0)
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Duração deve ser número positivo"
                })
                filmeAtualizado.duracao = duracao
        }   
        if(classificacao !== undefined) filmeAtualizado.classificacao = classificacao.trim() 
        if(data_lancamento !== undefined) filmeAtualizado.data_lancamento = data_lancamento  
         
        if(Object.keys(filmeAtualizado).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE filme SET ? WHERE ?', [filmeAtualizado, id])
        res.json({
            sucesso: true,
            mensagem: 'Filme atualizado!'
        })

    } catch(erro){
        console.error('Erro ao atualizar filme: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar filme',
            erro: erro.message
        })
    }
})

app.delete('/filmes/:id', async (req, res) => {
    try{
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false, 
                mensagem: 'ID de filme inválido.'
             })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

        if(filmeExiste.length === 0){
             return res.status(404).json({
                 sucesso: false,
                 mensagem: 'Filme não encontrado'
             })
        }

        await queryAsync('DELETE FROM filme WHERE id = ?', [id])
        res.json({
            sucesso: true,
            mensagem: "Filme apagado com sucesso"
        })

    } catch (erro){
        console.error('Erro ao apagar filme: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar filme',
            erro: erro.message
        })
    }
})
// app.get('/filmes', (req, res) =>{
//     pool.query('SELECT * FROM filme', (err, results) =>{
//         res.json(results)
//     })
// })

// app.get('/filmes/:id', (req, res) => {
//     const {id} = req.params

//     pool.query('SELECT * FROM filme WHERE id = ?', [id],(err, results) =>{
//         res.json(results)
//     })
// })

// tava colocando errado os S's - na 226, 228, 231
app.get('/salas', async (req, res) => {
    try{
        const salas = await queryAsync('SELECT *FROM sala')
        res.json({
            sucesso: true,
            dados: salas
        })
    } catch (erro) {
        console.error('Erro ao procurar uma sala: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao procurar uma sala',
            erro: erro.message
        })
    }
})

app.get('/salas/:id', async (req, res) => {
    try{
        const {id} = req.params

        if (!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de sala inexistente'
            })
        }

        const salas = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if(salas.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sala não encontrada'
            })
        }

        res.json({
            sucesso: true,
            dados: salas[0]
        })
    } catch(erro){
        console.error('Erro ao procurar sala por ID: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar sala por ID',
            erro: erro.message
        })
    }
})

app.post('/salas', async (req, res) =>{
    try{
        const {nome, capacidade} = req.body

        if(!nome || !capacidade){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Ambos os campos devem estar preenchidos"
            })
        }

        if(typeof capacidade !== 'number' || capacidade <=0){
            return res.status(400).json({
                sucosso: false,
                mensagem: "A capacidade da sala deve ser maior que 0"
            })
        }

        const novaSala = {
            nome: nome.trim(),
            capacidade: capacidade
        }

        const resultado = await queryAsync('INSERT INTO sala SET ?', [novaSala])

        res.status(201).json({
            sucesso: true,
            mensagem: "Sala criada com sucesso, vá confeir!",
            id: resultado.insertId
        })
    } catch(erro){
        console.error("Erro na criação da sala: ", erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro na criação de sala",
            erro: erro.message
        })
    }
})

app.put('/salas/:id', async (req, res) =>{
    try{
        const {id} = req.params
        const {nome, capacidade} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: "ID de sala inválido."
            })
        }

        const salaExistente = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if(salaExistente.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sala não encontrada'
            })
        }

        const salaAtualizada = {}
        if(nome !== undefined)
            salaAtualizada.nome = nome.trim()
        if(capacidade !== undefined){
            if(typeof capacidade !== 'number' || capacidade <= 0)
                return res.status(404).json({
            sucesso: false,
            mensagem: "A capacidade deve ser maior que 0"
            })
            salaAtualizada.capacidade = capacidade
        }

        if(Object.keys(salaAtualizada).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Sem campo para atualizar'
            })
        }

        await queryAsync('UPDATE sala SET ? WHERE ?', [salaAtualizada, id])
        res.json({
            sucesso: true,
            mensagem: 'Sala atualizada! Teste'
        })
    } catch (erro){
        console.error('Erro ao atualizar sala: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao atualizar sala",
            erro: erro.message
        })
    }
})

app.delete('/salas/:id', async (req, res) => {
    try{
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de sala inválida'
            })
        }

        const salaExistente = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if(salaExistente.length === 0 ){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sala não encontrada...'
            })
        }

        await queryAsync('DELETE FROM sala WHERE id = ?', [id])
        res.json({
            sucesso: true,
            mensagem: "Sala deletada com sucesso! Vá verificar"
        })
    } catch (erro){
        console.error('Erro ao deletar a sala: ', erro)
        res.status(500).json({
            sucesso: false, 
            mensagem: "Erro ao apagar a sala",
            erro: erro.message
        })
    }
})

app.get('/sessoes', async (req, res)=>{
    try{
        const sessoes = await queryAsync('SELECT * FROM sessao')
        res.json({
            sucesso: true,
            dados: sessoes
        })
    } catch (erro){
        console.error('Erro ao listar sessões: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao listar sessões",
            erro: erro.message
        })
    }
})

app.get('/sessoes/:id', async (req, res) =>{
    try{
        const {id} = req.params

        if (!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: "O ID é inválido"
            })
        }

        const sessao = await queryAsync('SELECT * FROM sessao WHERE id = ?', [id])

        if(sessao.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: "Sessão não encontrada"
            })
        }

        res.json({
            sucesso: true,
            dados: sessao[0]
        })
    } catch (erro){
        console.error("Erro ao buscar sessão por ID")
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar filme por ID",
            erro: erro.message
        })
    }
})

app.post('/sessoes', async (req, res) =>{
    try{
        const {filme_id, sala_id, data_hora, preco} = req.body

        if(!filme_id || sala_id || data_hora, !preco){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Esses elementos (ID da sala e e filme, data, hora e preço) são obrigatórios"
            })
        }
        if(typeof filme_id || sala_id || preco !== 'number')
    }
});
module.exports= app