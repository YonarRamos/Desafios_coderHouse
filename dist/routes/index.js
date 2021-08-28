"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./productos"));

var _carrito = _interopRequireDefault(require("./carrito"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/productos', _productos["default"]);
router.use('/carrito', _carrito["default"]);
var _default = router;
exports["default"] = _default;