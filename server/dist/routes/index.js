"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./productos"));

var _mensajes = _interopRequireDefault(require("./mensajes"));

var _usuarios = _interopRequireDefault(require("./usuarios"));

var _validationLogin = require("../services/validationLogin");

//import carritoRouter from './carrito';
var router = _express["default"].Router();

router.use('/productos', _validationLogin.validateLogIn, _productos["default"]); //router.use('/carrito', validateLogIn ,carritoRouter);

router.use('/mensajes', _validationLogin.validateLogIn, _mensajes["default"]);
router.use('/usuarios', _usuarios["default"]);
var _default = router;
exports["default"] = _default;