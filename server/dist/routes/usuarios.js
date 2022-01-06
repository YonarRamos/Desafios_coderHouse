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
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: String
 *           description: ID del usuario
 *           example: 61d43077bd9a8c81fd2bac57
 *         nombre:
 *           type: String
 *           description: nombre del usuario
 *           example: Jhon
 *         apellido:
 *           type: String
 *           description: apellido del usuario
 *           example: Meyer
 *         edad:
 *           type: number
 *           description: edad del usuario
 *           example: 25
 *         alias:
 *           type: String
 *           description: apodo del usuario
 *           example: Jhonny
 *         description:
 *           type: String
 *           description: Breve descripción del producto
 *           example: Lapiz de grafito #2
 *         avatar:
 *           type: String
 *           description: Imagen del usuario
 *           example: https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-256.png
 *         telefono:
 *           type: number
 *           description: numero telefonico del usuario
 *           example: 11387923645
 *         email:
 *           type: String
 *           description: email del usuario
 *           example: user@correo.com
 *         password:
 *           type: String
 *           description: clave de ingreso a su cuenta
 *           example: 12345
 *     NewUsertInput:
 *       type: object
 *       properties:
 *         nombre:
 *           type: String
 *           description: nombre del usuario
 *           example: Jhon
 *         apellido:
 *           type: String
 *           description: apellido del usuario
 *           example: Meyer
 *         edad:
 *           type: number
 *           description: edad del usuario
 *           example: 25
 *         alias:
 *           type: String
 *           description: apodo del usuario
 *           example: Jhonny
 *         description:
 *           type: String
 *           description: Breve descripción del producto
 *           example: Lapiz de grafito #2
 *         avatar:
 *           type: String
 *           description: Imagen del usuario
 *           example: https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-256.png
 *         telefono:
 *           type: number
 *           description: numero telefonico del usuario
 *           example: 11387923645
 *         email:
 *           type: String
 *           description: email del usuario
 *           example: user@correo.com
 *         password:
 *           type: String
 *           description: clave de ingreso a su cuenta
 *           example: 12345
 *         confirmPassword:
 *           type: String
 *           description: clave de ingreso a su cuenta
 *           example: 12345
 *     userFilter:
 *       type: object
 *       properties:
 *         email:
 *           type: String
 *           description: email del usuario
 *           example: user@correo.com
 */

router.post('/registrar', _validator.userValidator, _usuariosController.usuariosController.addUsers);
/**
 * @swagger
 * /usuarios/:
 *   get:
 *     summary: Devuelve todos los usuarios ó uno específico al indicar un email válido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userFilter'
 *     responses:
 *       200:
 *         description: get user data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items :
 *                  $ref: '#/components/schemas/User'
 *       404:
 *         description: User not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: objeto no encontrado
 *
 */

router.get('/', _auth.isLoggedIn, _usuariosController.usuariosController.getUsers);
router.post('/login', _auth_local["default"].authenticate('login'), _usuariosController.usuariosController.loginUsers);
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/api/login');
});
var _default = router;
exports["default"] = _default;