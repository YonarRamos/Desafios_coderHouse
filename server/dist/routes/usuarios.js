"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuariosController = require("../controllers/usuariosController.js");

var _validationLogin = require("../services/validationLogin");

var router = (0, _express.Router)();
router.post('/registrar', _validationLogin.validateLogIn, _usuariosController.usuariosController.add);
router.get('/listar', _validationLogin.validateLogIn, _usuariosController.usuariosController.get);
router.post('/login', _usuariosController.usuariosController.login);
var _default = router;
exports["default"] = _default;