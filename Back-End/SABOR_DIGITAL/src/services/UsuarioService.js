const UsuarioRepository = require('../repositories/UsuarioRepository');
const bcrypt = require('bcryptjs'); // Criptografar 
const jwt = require('jsonwebtoken'); // Gerar token

const JWT_SECRET = process.env.JWT_SECRET || 'chave_super_secreta_sabor_digital_123'; // O ideal é estar no .env, por ser uma informação pessoal

class UsuarioService{
    async registrarUsuario(dados){
        const {nome, email, senha, papel} = dados;

        if (!nome || !email || !senha || !papel){
            throw { status: 400, mensagem: "Dados correspondentes obrigatórios." };
        };

        const emailExiste = await UsuarioRepository.findByEmail(email);
            if(emailExiste){
                throw { status: 400, mensagem: "Email já existente!"}
            };

        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        // Define o papel de quem acessa - por padrão é CLIENTE
        const role = (papel === 'admin') ? 'admin' : 'cliente';

        const novoId = await UsuarioRepository.create({
            nome,
            email,
            senha: senhaHash,
            papel: role
        });

        return {
            sucesso: true,
            mensagem: "Usuário registrado com sucesso",
            id: novoId
        };
    }

    async login(email, senha){
        if (!email || !senha){
            throw { status: 400, mensagem: "Informações obrigatórias." };
            // 400 = Bad request
        }

        const usuario = await UsuarioRepository.findByEmail(email)
            if(!usuario) {
                throw { status: 404, mensagem: "Usuário inválido." };
                // 404 = Not found
            }

        // Validação da senha
        const senhaCerta = await bcrypt.compare(senha, usuario.senha);
            if (!senhaCerta){
             throw { status: 404, mensagem: "Senha incorreta!"}
            }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, papel: usuario.papel }, JWT_SECRET,
            { expiresIn: '8h'}
        );

        return{
            sucesso: true,
            mensagem: "Login efetuado com sucesso", 
            token,
            usario: {
                id: usuario.id,
                nome: usario.nome,
                email: usario.email,
                papel: ususario.papel
            } 
        };
    }
}


module.exports = new UsuarioService();
