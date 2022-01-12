"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _carritoController = _interopRequireDefault(require("../controllers/carritoController"));

var router = _express["default"].Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Carrito:
 *       type: object
 *       properties:  
 *         usuario_id:
 *           type: string
 *           description: id de un usuario válido
 *           example: 61d43077bd9a8c81fd2bac57
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               producto_id:
 *                 type: string
 *                 description: id de un producto válido
 *                 example: 61d43077bd9a8c81fd2bac57
 *               cantidad:
 *                 type: number
 *                 description: cantidad del producto
 *                 example: 55
 *     NewItemInput:
 *       type: object
 *       properties:
 *         usuario_id:
 *           type: string
 *           description: id de un usuario válido
 *           example: 61dcddf82e8eb8d86358ba79
 *         producto:
 *           type: object
 *           properties:
 *             producto_id:
 *               type: string
 *               description: id de un producto válido
 *               example: 61dcddf82e8eb8d86358ba70
 *             cantidad:
 *                type: number
 *                description: cantidad del producto
 *                example: 65
 */

/**
 * @swagger
 * /carrito/:usuario_id:
 *   get:
 *     summary: Consulta un carrito segun el id del usuario
 *     responses:
 *       200:
 *         description: success response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     timeStamp:
 *                       type: string
 *                       example: 2022-01-11T20:53:07.000Z
 *                     _id:
 *                       type: string
 *                       example: 61ad0adab5557a8c7c87fb14
 *                     usuario:
 *                       type: string
 *                       example: 61ad0ad7b5557a8c7c87fb10
 *                     productos:
 *                       type: array
 *                       items:
 *                          type: object
 *                          properties:
 *                              producto_id:
 *                                  type: string
 *                                  example: 61ad0ad7b5557a8c7c87fb10
 *                              cantidad:
 *                                  type: number
 *                                  example: 25
 *                              _id:
 *                                  type: string
 *                                  example: 61ad0ad7b5557a8c7c87fb10
 *       404:
 *         description: Carrito no existe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: El carrito indicado no existe
 *
 */


router.get('/:usuario_id', _carritoController["default"].get);
/**
 * @swagger
 * /carrito/:
 *   post:
 *     summary: Agrega un item al carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewItemInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Producto agregado
 *                 data:
 *                    type: object
 *                    properties:
 *                      _id:
 *                        type: string
 *                        example: 61dcddf92e8eb8d86358ba7b
 *                      usuario:
 *                        type: string
 *                        example: 61dcddf82e8eb8d86358ba79
 *                      productos:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            producto_id:
 *                              type: string
 *                              example: 619ba8bd943777f44ed5d67b
 *                            cantidad:
 *                              type: number
 *                              example: 45
 *                            _id:
 *                              type: string
 *                              example: 619ba8bd943777f44ed5d67b
 *                      timeStamp:
 *                        type: string
 *                        example: 2022-01-11T01:22:06.000Z
 *       400:
 *         description: Missing body fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: missing Body fields
 *       401:
 *         description: Si el codigo de producto es erroneo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Producto inavalido
 *       402:
 *         description: Si intenta agregar un item que ya existe en el carrito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Esta intentando agregar un producto que ya existe
 *       404:
 *         description: Si el codigo de usuario es erroneo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: El carrito no existe
 *
 */

router.post('/', _carritoController["default"].addItem);
/**
 * @swagger
 * /carrito/:usuario_id&:producto_id:
 *   delete:
 *     summary: Borra un item del carrito
 *     responses:
 *       200:
 *         description: success response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Item borrado
 *                 schema:
 *                    $ref: '#/components/schemas/NewItemInput'
 *       404:
 *         description: El producto no existe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: El producto no existe
 *
 */

router["delete"]('/:usuario_id&:producto_id', _carritoController["default"].deleteItem);
/**
 * @swagger
 * /carrito/:usuario_id:
 *   put:
 *     summary: actualiza la cantidad de un producto en el carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                producto:
 *                  type: object
 *                  properties:
 *                    producto_id:
 *                      type: string
 *                      description: id de un producto válido
 *                      example: 61dcddf82e8eb8d86358ba70
 *                    cantidad:
 *                      type: number
 *                      description: cantidad del producto
 *                      example: 65
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Producto agregado
 *                 data:
 *                   type: object
 *                   properties:
 *                      _id:
 *                        type: string
 *                        example: 61dcddf92e8eb8d86358ba7b
 *                      usuario:
 *                        type: string
 *                        example: 61dcddf82e8eb8d86358ba79
 *                      productos:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              producto_id:
 *                              type: string
 *                              example: 619ba8bd943777f44ed5d67b
 *                            cantidad:
 *                              type: number
 *                              example: 45
 *                            _id:
 *                              type: string
 *                              example: 619ba8bd943777f44ed5d67b
 *                      timeStamp:
 *                        type: string
 *                        example: 2022-01-11T01:22:06.000Z
 *       404:
 *         description: Si el codigo de producto es incorrecto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: El producto no existe
 *       401:
 *         description: Si el codigo de producto de usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: El carrito no existe
 *
 */

router.put('/:usuario_id', _carritoController["default"].updateItem);
var _default = router;
exports["default"] = _default;