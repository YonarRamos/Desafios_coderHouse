"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productosController = require("../controllers/productosController.js");

var _upload = _interopRequireDefault(require("../middleware/upload"));

var router = (0, _express.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: String
 *           description: ID del producto
 *           example: 61d43077bd9a8c81fd2bac57
 *         codigo:
 *           type: String
 *           description: SKU
 *           example: 1632360382946
 *         name:
 *           type: String
 *           description: nombre del producto
 *           example: Lapiz
 *         precio:
 *           type: number
 *           description: precio del producto
 *           example: 20
 *         stock:
 *           type: number
 *           description: disponibilidad del producto
 *           example: 120
 *         description:
 *           type: String
 *           description: Breve descripción del producto
 *           example: Lapiz de grafito #2
 *         thumbnail:
 *           type: String
 *           description: Imagen del producto
 *           example: https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png
 *     NewProductInput:
 *       type: object
 *       properties:
 *         name:
 *           type: String
 *           description: nombre del producto
 *           example: Lapiz
 *         precio:
 *           type: number
 *           description: precio del producto
 *           example: 20
 *         stock:
 *           type: number
 *           description: disponibilidad del producto
 *           example: 120
 *         description:
 *           type: String
 *           description: Breve descripción del producto
 *           example: Lapiz de grafito #2
 *         thumbnail:
 *           type: String
 *           description: Imagen del producto
 *           example: https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png
 *     productFilter:
 *       type: object
 *       properties:
 *         id:
 *           type: String
 *           description: id del producto
 *           example: 61d43077bd9a8c81fd2bac57
 */

/**
 * @swagger
 * /productos/:
 *   get:
 *     summary: Devuelve todos los producto ó uno específico al indicar un id válido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/productFilter'
 *     responses:
 *       200:
 *         description: get product data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items :
 *                  $ref: '#/components/schemas/Product'
 *       404:
 *         description: No Product exist
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

router.get('/', _productosController.productosController.getProducts);
/**
 * @swagger
 * /productos/:
 *   post:
 *     summary: Crea un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewProductInput'
 *     responses:
 *       200:
 *         description: retrieve new product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: producto agregado
 *                 data:
 *                    $ref: '#/components/schemas/Product'
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
 *
 */

router.post('/'
/* ,upload.single("thumbnail") */
, _productosController.productosController.addProducts);
/**
 * @swagger
 * /productos/:id:
 *   put:
 *     summary: Actualiza un producto existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewProductInput'
 *     responses:
 *       200:
 *         description: retrieve updated product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Producto Actualizado
 *                 data:
 *                    $ref: '#/components/schemas/ProductData'
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
 *         description: Product not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: El producto indicado no existe
  *       500:
 *         description: Product Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Error al Actualizar el producto indicado
 */

router.put('/:id', _productosController.productosController.updateProducts);
/**
 * @swagger
 * /productos/:id:
 *   delete:
 *     summary: Borra un producto existente
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
 *                   example: Producto Eliminado
 *       404:
 *         description: Product not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: El producto indicado no existe
  *       500:
 *         description: Product Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Error al Actualizar el producto indicado
 *
 */

router["delete"]('/:id', _productosController.productosController.deleteProducts);
var _default = router;
exports["default"] = _default;