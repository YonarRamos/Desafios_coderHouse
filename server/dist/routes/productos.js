"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productosController = require("../controllers/productosController.js");

var router = (0, _express.Router)();
router.get('/', _productosController.productosController.get);
router.post('/', _productosController.productosController.add);
router.put('/:id', _productosController.productosController.update);
router["delete"]('/:id', _productosController.productosController["delete"]);
var _default = router;
exports["default"] = _default;