import { Router } from 'express';
import { checkAdmin } from "../middleware/admin";
import { productosController } from '../controllers/productosController.js';

const router = Router();


//router.get('/nuevo', productosController.nuevoForm);

router.get('/listar', productosController.listar);

router.get('/listar/:id', productosController.listarById);

router.get('/vista-test/:cant?', productosController.fakerProducts);

router.post('/agregar', productosController.agregar);

router.put('/actualizar/:id', productosController.actualizar);

router.delete('/borrar/:id',checkAdmin , productosController.borrar);

export default router