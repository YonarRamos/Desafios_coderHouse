import express from 'express';
import productosRouter from './productos';
import carritoRouter from './carrito';
import mensajesRouter from './mensajes';

const router = express.Router();

router.use('/productos', productosRouter);
router.use('/carrito', carritoRouter);
router.use('/mensajes', mensajesRouter);

export default router