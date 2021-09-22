import { Router } from 'express';
import { checkAdmin } from "../middleware/admin";
import { productosController } from '../controllers/productosController.js';
import asyncHandler from 'express-async-handler';

const router = Router();


//router.get('/nuevo', productosController.nuevoForm);

router.get('/listar',productosController.checkProductExists ,asyncHandler(productosController.getProducts));

 router.get('/listar/:id',productosController.checkProductExists, asyncHandler(productosController.listarById));

router.post('/agregar', asyncHandler(productosController.agregar));

router.put('/actualizar/:id',productosController.checkProductExists , asyncHandler(productosController.actualizar));

router.delete('/borrar/:id', checkAdmin, productosController.checkProductExists , productosController.borrar);

export default router