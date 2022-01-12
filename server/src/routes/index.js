import express from 'express';
import productosRouter from './productos';
import carritoRouter from './carrito';
import mensajesRouter from './mensajes';
import usuariosRouter from './usuarios';
import ordenesRouter from './ordenes';
import { isLoggedIn } from "../middleware/auth_local";
const router = express.Router();

router.use('/productos' , isLoggedIn , productosRouter);
router.use('/mensajes' ,mensajesRouter);
router.use('/usuarios', usuariosRouter);
router.use('/carrito', carritoRouter);
router.use('/ordenes', ordenesRouter);
export default router