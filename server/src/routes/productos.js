import { Router } from 'express';
import { productosController } from '../controllers/productosController.js';

const router = Router();

router.get('/', productosController.getProducts);
router.post('/', productosController.addProducts);
router.put('/:id', productosController.updateProducts);
router.delete('/:id', productosController.deleteProducts);

export default router