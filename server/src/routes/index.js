import express from 'express';
import productosRouter from './productos';
//import carritoRouter from './carrito';
import mensajesRouter from './mensajes';
import usuariosRouter from './usuarios';
const router = express.Router();
import { validateLogIn } from "../services/validationLogin";

router.use('/productos', validateLogIn , productosRouter);
//router.use('/carrito', validateLogIn ,carritoRouter);
router.use('/mensajes', validateLogIn ,mensajesRouter);
router.use('/usuarios', usuariosRouter);

export default router