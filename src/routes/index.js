import Router from 'koa-router';
import productosRouter from './productos';

const router = new Router({
  prefix: '/api/v1/',
});

router.use(productosRouter);

export default router.routes();