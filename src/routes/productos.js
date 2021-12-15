import Router from 'koa-router';
import { productosController } from '../controllers/productosController';

const router = new Router({
  prefix: 'productos',
});

router.get('/' , productosController.get);
router.get('/:id' , productosController.getById);
router.post('/', productosController.add);
router.put('/:id', productosController.update);
router.delete('/:id', productosController.delete);

export default router.routes();