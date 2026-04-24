//Exercício 1

app.get('/usuarios', async (req, res) => {
    try{
        const buscarUsuario = await queryAsync('SELECT *FROM usuarios')
        res.json({
            sucesso: true,
            dados: usuarios,
            total: usuarios.length
        })
    } catch (erro){
        console.error("Erro ao buscar usuários: ", erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao verificar usuários",
            erro: erro.message
        })
    }
})

app.get('/usuarios/:id', async (req, res) => {
    try{
        const {id} = req.params
        //  const usuario = await queryAsync ('SELECT * FROM usuarios WHERE id = ?', [id])
        //if (!validarExistencia(usuario, res, "Usuario")){}

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: "ID de usuário inexistente"
            })
        }

        const validarUsuarios = await queryAsync ('SELECT * FROM usuarios WHERE id = ?', [id])
        
        if(usuarios.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuário não encontrado"
            })
        }

        res.json({
            sucesso: true,
            dados: usuarios[0]
        })
    } catch (erro){
        console.error("Erro ao procurar usuário por ID: ", erro)
        res.status(500).json({
            secusso: false,
            mensagem: "Erro ao procurar usuário por ID",
            erro: erro.message
        })
    }
})

//Exercício 2

app.post('/pedidos', async (req, res) => {
    try{
        const {cliente, valor} = req.body

        if(!cliente || !valor == undefined){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Nome e valor deveme ser preenchidos obrigatoriamente!"
            })
        }

        if (typeof valor !== 'number' || valor <= 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: "O valor deve ser um número positivo/maior que zero"
            })
        }

        const novoPedido ={
            nome: nome.trim(),
            valor: valor,
        }

        const atualizacao = await queryAsync ('INSERT INTO pedidos SET ?', [novoPedido])

        res.status(201).json({
            sucesso: true,
            mensagem: "Pedido novo criado com sucesso! Vá conferir.",
            id: resultado.insertId
        })
    } catch (erro){
        console.log("Erro ao tentar criar um novo produto")
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao registrar nova sala",
            erro: erro.message
        })
    }
})


//Exercício 3

app.put('/salas/:id', async (req, res) => {
    try{
        const {id} = req.params
        const{capacidade, disponibilidade} = req.body

        if (!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem:"ID de sala inválido/inexistente"
            })
        }

        const salaExistente = await queryAsync('SELECT * FROM salas WHERE id = ?', [id])

        if(salaExistente.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: "Sala não encontrada"
            })
        }

        const salaAtualizada = {}
        if(capacidade !== undefined) salaAtualizada.capacidade = capacidade.trim()
        if(disponibilidade !== undefined) salaAtualizada.disponibilidade = disponibilidade.trim()
        if(Object.keys(verificacaoDeSalas).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Nnehum campo disponível para atualizar"
            })
        }

        await queryAsync('UPDATE salas SET ? WHERE ?', [salaAtualizada, id])
        res.json({
            sucesso: true,
            mensagem: "Sala atualizada com sucesso! Verifique."
        })
    } catch (erro){
        console.error("Erro ao tentar atualizar a sala: ", erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao tentar atualizar informação da sala",
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
                mensagem: "ID de sala inválido/inexistente"
            })
        }

        const salaExistindo = await queryAsync ('SELECT * FROM salas WHERE id = ?', [id])

        if(salaExistindo.length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Sala não encontrada"
            })
        }

        await queryAsync ('DELETE FROM salas WHERE id = ?', [id])
        res.json({
            sucesso: true,
            mensagem: "Sala deletada com sucesso! Vá conferir."
        })
    } catch (erro){
        console.error('Erro ao tentar deletar a sala: ', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao deletar a sala",
            erro: erro.message
        })
    }
})