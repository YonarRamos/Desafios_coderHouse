"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuariosController = require("../controllers/usuariosController.js");

var _auth_local = _interopRequireDefault(require("../middleware/auth_local"));

var _auth = require("../middleware/auth");

var _validator = require("../middleware/validator");

var router = (0, _express.Router)();
router.post('/registrar', _validator.userValidator, _usuariosController.usuariosController.add);
router.get('/listar', _auth.isLoggedIn, _usuariosController.usuariosController.get);
router.get('/loggedIn', _usuariosController.usuariosController.login);
router.post('/login', _auth_local["default"].authenticate('login'), _usuariosController.usuariosController.login);
router.get('/auth/facebook', _auth_local["default"].authenticate('facebook', {
  scope: ['email']
}));
router.get('/auth/facebook/callback', _auth_local["default"].authenticate('facebook', {
  failureRedirect: '/fail'
}), _usuariosController.usuariosController.login);
router.get('/fail', function (req, res) {
  res.json('login-error', {
    msg: 'Error de autenticación'
  });
});
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/api/login');
});
var _default = router;
exports["default"] = _default;