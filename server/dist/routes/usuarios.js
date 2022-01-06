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
router.post('/registrar', _validator.userValidator, _usuariosController.usuariosController.addUsers);
router.get('/', _auth.isLoggedIn, _usuariosController.usuariosController.getUsers); // router.get('/loggedIn', usuariosController.login);

router.post('/login', _auth_local["default"].authenticate('login'), _usuariosController.usuariosController.loginUsers); // router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/api/login');
// });

var _default = router;
exports["default"] = _default;