const express = require('express');
const router = express.Router();

const CadastroUserController = require('./controllers/CadastroUserController');
const GadoController = require('./controllers/GadoController');
const PiqueteController = require('./controllers/PiqueteController');

router.get('/CadastroUser', [], CadastroUserController.find);
router.post('/CadastroUser', [], CadastroUserController.create);

router.get('/Gados', [], GadoController.find);
router.post('/Gados', [], GadoController.create);

router.get('/Piquetes', [], PiqueteController.find);
router.post('/Piquetes', [], PiqueteController.create);

module.exports = (app) => app.use(router);