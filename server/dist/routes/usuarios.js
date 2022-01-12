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
 *         avatar:
 *           type: String
 *           description: Imagen del usuario
 *           example: https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-256.png
 *         telefono:
 *           type: number
 *           description: numero telefonico del usuario
 *           example: 1138792364
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
 *     userLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: String
 *           description: email del usuario
 *           example: user@correo.com
 *         password:
 *           type: String
 *           description: clave de acceso
 *           example: 1234
 */

/**
 * @swagger
 * /usuarios/registrar:
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUsertInput'
 *     responses:
 *       200:
 *         description: Usuario agregado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Usuario Agregado
 *                 data:
 *                    $ref: '#/components/schemas/NewUsertInput'
 *       400:
 *         description: Invalid Body Parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Missig body fields
 */

router.post('/registrar', _validator.userValidator, _usuariosController.usuariosController.addUsers);
/**
 * @swagger
 * /usuarios/:usuario_id:
 *   put:
 *     summary: Actualiza un usuario existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUsertInput'
 *     responses:
 *       200:
 *         description: retrieve updated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Usuario Actualizado
 *                 data:
 *                    $ref: '#/components/schemas/NewUsertInput'
 *       400:
 *         description: Invalid Body Parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Missig body fields
 *       404:
 *         description: User not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: El usuario indicado no existe
 */

router.put('/:usuario_id', _validator.userValidator, _usuariosController.usuariosController.updateUsers);
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
/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Permite al usuario abrir una sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userLogin'
 *     responses:
 *       200:
 *         description: Usuario logueado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *               msg: Welcome to our store!!
 *               passport :
 *                  $ref: '#/components/schemas/User'
 *       400:
 *         description: Datos incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Datos incorrectos
 *
 */

router.post('/login', _auth_local["default"].authenticate('login'), _usuariosController.usuariosController.loginUsers);
/**
 * @swagger
 * /usuarios/logout:
 *   get:
 *     summary: Permite al usuario cerrar su sesión
 *     responses:
 *       200:
 *         description: Usuario deslogueado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *               msg: Adios!!
 *       400:
 *         description: No hay sesiones
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: No hay ninguna sesión activa
 *
 */

router.get('/logout', function (req, res) {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid'); // clean up!

    return res.status(200).json({
      msg: 'Adios'
    });
  } else {
    return res.status(400).json({
      msg: 'No hay usuarios logueados'
    });
  }
});
/**
 * @swagger
 * /usuarios/:usuario_id:
 *   delete:
 *     summary: Elimina un usuario por id y su carrito de compras respectivamente
 *     responses:
 *       200:
 *         description: Eliminar un usuario segun su id
 *         content:
 *           application/json:
 *             schema:
 *               type: oject
 *               msg: Usuario Eliminar
 *               data :
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
 *                   example: Usuario no existe
 *
 */

router["delete"]('/:usuario_id', _usuariosController.usuariosController.deleteUsers);
var _default = router;
exports["default"] = _default;