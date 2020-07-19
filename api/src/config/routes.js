const express = require('express');

const PersonController = require('../controllers/Person');

const routes = express.Router();

routes.get('/', PersonController.person_get);

routes.post('/', PersonController.person_create);

module.exports = routes;