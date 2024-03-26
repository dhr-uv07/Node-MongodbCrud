const express = require('express');
const controllerPro = require('../controllers/productController');
const verifyProduct = require('../middleware/verifyProduct');

const routes = express.Router();

routes.post('/',verifyProduct.uniqueProduct, controllerPro.createProduct);
routes.patch('/', controllerPro.updateProduct);
routes.delete('/:id', controllerPro.deleteProduct);
routes.get('/', controllerPro.getProductsAndCategories);

module.exports = routes;


