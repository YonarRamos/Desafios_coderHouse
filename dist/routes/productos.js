"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _admin = require("../middleware/admin");

var _productosController = require("../controllers/productosController.js");

var router = (0, _express.Router)(); //router.get('/nuevo', productosController.nuevoForm);

router.get('/listar', _productosController.productosController.listar);
router.get('/listar/:id', _productosController.productosController.listarById);
router.get('/vista-test/:cant?', _productosController.productosController.fakerProducts);
router.post('/agregar', _productosController.productosController.agregar);
router.put('/actualizar/:id', _productosController.productosController.actualizar);
router["delete"]('/borrar/:id', _admin.checkAdmin, _productosController.productosController.borrar);
var _default = router;
exports["default"] = _default;