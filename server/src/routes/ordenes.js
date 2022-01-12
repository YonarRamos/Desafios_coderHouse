import express from 'express';
import ordenesController from '../controllers/ordenesController';
import { orderValidator } from '../middleware/orderValidator';
import { isLoggedIn } from '../middleware/auth';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Orden:
 *       type: object
 *       properties:  
 *         usuario:
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
 *         direccionEntrega:
 *           type: object
 *           properties:
 *              calle:
 *                  type: string
 *                  example: calle 4
 *              altura:
 *                  type: number
 *                  example: 2678
 *              codigoPostal:
 *                  type: number
 *                  example: 1687
 *              piso:
 *                  type: number
 *                  example: 4
 *              departamento:
 *                  type: string
 *                  example: 4B
 *         timeStamp:
 *           type: string
 *           example: 2022-01-11T11:30:13.000Z
 *         estado:
 *           type: string
 *           example: generado
 *         total:
 *           type: number
 *           example: 2544
 *     OrderInput:
 *       type: object
 *       properties:
 *         usuario_id:
 *           type: string
 *           description: id de un usuario válido
 *           example: 61dcddf82e8eb8d86358ba79
 *         direccionEntrega:
 *           type: object
 *           properties:
 *              calle:
 *                  type: string
 *                  example: calle 4
 *              altura:
 *                  type: number
 *                  example: 2678
 *              codigoPostal:
 *                  type: number
 *                  example: 1687
 *              piso:
 *                  type: number
 *                  example: 4
 *              departamento:
 *                  type: string
 *                  example: 4B
 */

/**
 * @swagger
 * /ordenes/:
 *   post:
 *     summary: Genera una orden en base al carrito actual
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       200:
 *         description: Orden generada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: String
 *                   example: Orden generada
 *                 data:
 *                    $ref: '#/components/schemas/OrderInput'
 *       404:
 *         description: Id de usuario errado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: Usuario invalido
 */

router.post('/', orderValidator, ordenesController.generate);

/**
 * @swagger
 * /ordenes/:id:
 *   delete:
 *     summary: Borra una orden según su id
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
 *                   example: Orden eliminada
 *                 schema:
 *                    $ref: '#/components/schemas/OrderInput'
 *       404:
 *         description: La orden no existe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: String
 *                   example: La orden no existe
 *
 */
router.delete('/:id', ordenesController.delete);

export default router;