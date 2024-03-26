const express = require('express');
const controllerCat = require('../controllers/categoryController');

const routes = express.Router();

routes.post('/', controllerCat.createCategory);
routes.delete('/:id', controllerCat.deleteCategory);
routes.get('/', controllerCat.getCategoryWiseProducts);

module.exports = routes;