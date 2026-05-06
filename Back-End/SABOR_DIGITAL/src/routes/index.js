const express = require('express')
const router = express.Router()

const produtoRoutes = require('./ProdutoRoutes')

router.get('/', (req, res) => {
    res.json({
        mensagem: "API SaborDigital",
        versao: "1.0.0",
        arquitetura: "MVC + SOLID"
    })
})

router.use('/prodtos', produtoRoutes)