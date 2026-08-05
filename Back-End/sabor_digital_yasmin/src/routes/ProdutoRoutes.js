const express = require ('express')
const router = express.Router()

const ProdutoController = require('./controllers/ProdutoController')

router.get('/', ProdutoController.listar)//listar = construído na controller
router.get('/:id', ProdutoController.buscarPorId)
router.post('/', ProdutoController.cadastrar)
router.put('/:id', ProdutoController.atualizar)
router.delete('/:id', ProdutoController.deletar)