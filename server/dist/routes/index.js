"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./productos"));

var _carrito = _interopRequireDefault(require("./carrito"));

var _mensajes = _interopRequireDefault(require("./mensajes"));

var _usuarios = _interopRequireDefault(require("./usuarios"));

var _path = _interopRequireDefault(require("path"));

var _auth_local = require("../middleware/auth_local");

var router = _express["default"].Router();

router.use('/productos', _auth_local.isLoggedIn, _productos["default"]);
router.use('/mensajes', _mensajes["default"]);
router.use('/usuarios', _usuarios["default"]);
router.use('/carrito', _carrito["default"]);
var _default = router;
exports["default"] = _default;