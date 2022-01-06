import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController.js';
import passport from '../middleware/auth_local';
import { isLoggedIn } from '../middleware/auth';
import { userValidator } from '../middleware/validator';

const router = Router();
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
router.post('/registrar', userValidator ,usuariosController.addUsers);

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
router.get('/' , isLoggedIn , usuariosController.getUsers);
router.post('/login', passport.authenticate('login') , usuariosController.loginUsers);
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/api/login');
});

export default router