"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _admin = require("../middleware/admin");

var _productosController = require("../controllers/productosController.js");

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var router = (0, _express.Router)(); //router.get('/nuevo', productosController.nuevoForm);

router.get('/listar', _productosController.productosController.checkProductExists, (0, _expressAsyncHandler["default"])(_productosController.productosController.getProducts));
router.get('/listar/:id', _productosController.productosController.checkProductExists, (0, _expressAsyncHandler["default"])(_productosController.productosController.listarById));
router.post('/agregar', (0, _expressAsyncHandler["default"])(_productosController.productosController.agregar));
router.put('/actualizar/:id', _productosController.productosController.checkProductExists, (0, _expressAsyncHandler["default"])(_productosController.productosController.actualizar));
router["delete"]('/borrar/:id', _admin.checkAdmin, _productosController.productosController.checkProductExists, _productosController.productosController.borrar);
var _default = router;
exports["default"] = _default;