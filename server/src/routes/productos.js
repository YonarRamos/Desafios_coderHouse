import { Router } from 'express';
import { productosController } from '../controllers/productosController.js';

const router = Router();

router.get('/', productosController.get);
router.post('/', productosController.add);
router.put('/:id', productosController.update);
router.delete('/:id', productosController.delete);

export default router