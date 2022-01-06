import { Router } from 'express';
import { productosController } from '../controllers/productosController.js';
import upload from '../middleware/upload';

const router = Router();
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
 *           example: 1
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
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Devuelve todos los productos
 *     responses:
 *       200:
 *         description: get array of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items :
 *                  $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /productos?id:
 *   get:
 *     summary: Devuelve un producto por id
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
router.get('/', productosController.getProducts);

/**
 * @swagger
 * /:
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
router.post('/'/* ,upload.single("thumbnail") */, productosController.addProducts);

/**
 * @swagger
 * /:id:
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
router.put('/:id', productosController.updateProducts);

/**
 * @swagger
 * /:id:
 *   delete:
 *     summary: Borra un producto existente
 *     responses:
 *       200:
 *         description: succes response
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
router.delete('/:id', productosController.deleteProducts);

export default router