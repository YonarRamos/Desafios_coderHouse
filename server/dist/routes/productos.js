"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productosController = require("../controllers/productosController.js");

var router = (0, _express.Router)();
router.get('/', _productosController.productosController.getProducts);
router.post('/', _productosController.productosController.addProducts);
router.put('/:id', _productosController.productosController.updateProducts);
router["delete"]('/:id', _productosController.productosController.deleteProducts);
var _default = router;
exports["default"] = _default;