import express from 'express';
import productosRouter from './productos';
import carritoRouter from './carrito';
import mensajesRouter from './mensajes';
import usuariosRouter from './usuarios';
import path from 'path';
const router = express.Router();
import { isLoggedIn } from "../middleware/auth_local";

router.use('/productos' , isLoggedIn , productosRouter);
router.use('/mensajes' ,mensajesRouter);
router.use('/usuarios', usuariosRouter);
router.use('/carrito', carritoRouter);
export default router