const app = require('./app');
const pool = require('./config/database');

const PORT = 3000;

pool.getConnection((err, connection) => {
    if(err){
        console.error('Erro ao conectar com o banco: ', err)
        process.exit(1)
    }

    console.log('Conectado ao MySQL!!!')
    connection.release()
})

app.listen(PORT, () =>{
    console.log('Servidor Rodando!')
})

//module.exports = app  - é só no App e no database