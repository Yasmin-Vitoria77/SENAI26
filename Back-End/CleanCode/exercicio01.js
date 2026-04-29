const validarExistencia = (resultado, res, tipo) => {
    if(resultado.length === 0){
        res.status(404).json({
            sucesso: false,
            mensagem: `${tipo} não encontrado`
        })
        return false
    }
    return true
}


//Exercício 1

app.get('/usuarios', async (req, res) => {
    try{
        const buscarUsuario = await queryAsync('SELECT * FROM usuarios')
        res.status(200).json({
            sucesso: true,
            dados: buscarUsuario,
            total: buscarUsuario.length
        })
    } catch (erro){
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao verificar usuários"
        })
    }
})

app.get('/usuarios/:id', async (req, res) => {
    try{
        const {id} = req.params
        const usuario = await queryAsync ('SELECT * FROM usuarios WHERE id = ?', [id])
        
        if (!validarExistencia(usuario, res, "Usuario")){
            return
        }

        res.status(200).json({
            sucesso: true,
            dados: usuario[0] //primeiro usuário cadastrado - pra exibir só um
        })
     
    } catch (erro){
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao procurar usuário por ID"
        })
    }
})

//Exercício 2

const validarDados = ({cliente, valor}) => {
    if(!cliente || !valor){
        return "Cliente e valor são obrigatórios"
    }

    if(typeof valor !== "number" || valor <= 0){    // verifica o tipo de variável
        return "Valor inválido"
    }

    return null // se não passar por nenhuma dessas validações
}

app.post('/pedidos', async (req, res) => {
    try{

        const erro = validarDados(req.body) //vai separar as informações

        if(erro){
            return res.status(400).json({
                sucesso: false,
                mensagem: erro
            })
        }

        await queryAsync("INSERT INTO pedidos SET ?", [req.body])

        res.status(201).json({
            sucesso: true,
            mensagem: "Pedido cadastrado!"
        })        
        
    } catch (erro){
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao registrar novo pedido"
        })
    }
})


//Exercício 3

app.put('/salas/:id', async (req, res) => {
    try{
        const {id} = req.params
        const dados = req.body

        const sala = await queryAsync ("SELECT * FROM sala WHERE ID = ?", [id])
        //essas infromações sairam lá de cima - reaproveitando função
        if(!validarExistencia(sala, res, "Sala")){   
            return 
        } 
        //verificar as chaves(cliente, valor) dentro de um objeto - se salvou nada dentro de DADOS, se estão preenchidos ou não 
        if(Object.keys(dados).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: "Nenhum dado enviado"
            })
        }
        

        await queryAsync('UPDATE sala SET ? WHERE id = ?', [dados, id])
        res.json({
            sucesso: true,
            mensagem: "Sala atualizada com sucesso! Verifique."
        })

    } catch (erro){
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao tentar atualizar informação da sala"
        })
    }
})

app.delete('/salas/:id', async (req, res) => {
    try{
        const {id} = req.params

        const sala = await queryAsync ('SELECT * FROM salas WHERE id = ?', [id])

        if(!validarExistencia(sala, res, "Sala")){
            return 
        }

      
        await queryAsync ('DELETE FROM salas WHERE id = ?', [id])
        res.status(200).json({
            sucesso: true,
            mensagem: "Sala deletada com sucesso! Vá conferir."
        })
        
    } catch (erro){
        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao deletar a sala"
        })
    }
})