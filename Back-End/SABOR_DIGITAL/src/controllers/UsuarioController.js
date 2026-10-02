const UsuarioService = require ('../services/UsuarioService')

class UsuarioController{
    async registrar(req, res){
        /*#swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do novo usuário',
            schema: {
                $nome: 'Administrador',
                $email: 'admin@sabordigital.com',
                $senha: '123456',
                papel: 'admin'
            }
        }
        */
        try{
            const token = await UsuarioService.registrarUsuario(req.body);
            res.status(201).json(token);

        } catch(erro){
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: erro.message || 'Erro ao cadastrar usuário',
                error: erro.stack || erro
            });
        }
    }

    async login(req, res){
        try{
            const dados = await UsuarioService.loginUsuario(req.body);
            res.status(201).json(dados)
        } catch(erro){
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: erro.message || 'Erro ao cadastrar usuário',
                error: erro.stack || erro
            });
        }
    }
}

module.exports = new UsuarioController();
// Lógica de controle de requisições e respostas