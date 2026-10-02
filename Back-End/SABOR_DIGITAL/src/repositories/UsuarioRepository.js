const pool = require('../config/database');

class UsuarioRepository {
    async create(usuarioData) {
        const { nome, email, senha, papel } = usuarioData;
        const [result] = await pool.query(
            'INSERT INTO usuario (nome, email, senha, papel) VALUES (?, ?, ?, ?)',
            [nome, email, senha, papel || 'cliente']
        );
        return result.insertId;
    }

    async findByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        return rows[0];
    }

    async create(usuarioData){
        const { nome, email, senha, papel } = usuarioData;
        const [result] = await pool.query(
            'INSERT INTO usuario (nome, email, senha, papel) VALUES (?, ?, ?, ?)', [nome, email, senha, papel] 
        );
        return result.insertId;
    }
}


module.exports = new UsuarioRepository();
// Comunicação com o Banco de Dados (SQL)