const { Router } = require('express');
const { checkAdmin } = require("../middleware/admin");
const { productosController } = require('../controllers/productosController.js');
const asyncHandler = require('express-async-handler');

const router = Router();


//router.get('/nuevo', productosController.nuevoForm);

router.get('/listar', productosController.checkProductExists ,asyncHandler(productosController.getProducts));

router.get('/listar/:id', productosController.checkProductExists ,asyncHandler(productosController.getProducts));

router.post('/agregar', productosController.checkAddProducts, asyncHandler(productosController.addProducts));

router.put('/actualizar/:id',productosController.checkProductExists , asyncHandler(productosController.updateProduct));

router.delete('/borrar/:id', checkAdmin, productosController.checkProductExists , productosController.deleteProducts);

module.exports = router;