"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require("../middleware/admin"),
    checkAdmin = _require2.checkAdmin;

var _require3 = require('../controllers/productosController.js'),
    productosController = _require3.productosController;

var asyncHandler = require('express-async-handler');

var router = Router(); //router.get('/nuevo', productosController.nuevoForm);

router.get('/listar', productosController.checkProductExists, asyncHandler(productosController.getProducts));
router.get('/listar/:id', productosController.checkProductExists, asyncHandler(productosController.getProducts));
router.post('/agregar', productosController.checkAddProducts, asyncHandler(productosController.addProducts));
router.put('/actualizar/:id', productosController.checkProductExists, asyncHandler(productosController.updateProduct));
router["delete"]('/borrar/:id', checkAdmin, productosController.checkProductExists, productosController.deleteProducts);
module.exports = router;