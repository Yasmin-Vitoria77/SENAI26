const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.post('/registrar', UsuarioController.registrar); // rota pega de Controller
router.post('/login', UsuarioController.login);

module.exports = router;
// Endpoints