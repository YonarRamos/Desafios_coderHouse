import express from 'express';
import { checkAdmin } from "../middleware/admin";
import productosController from '../controllers/productosController.js';

const router = express.Router();

//router.get('/nuevo', productosController.nuevoForm);

router.get('/listar', productosController.listar);

router.get('/listar/:id', productosController.listarById);

router.post('/agregar',checkAdmin , productosController.agregar);

router.put('/actualizar/:id',checkAdmin , productosController.actualizar);

router.delete('/borrar/:id',checkAdmin , productosController.borrar);

export default router