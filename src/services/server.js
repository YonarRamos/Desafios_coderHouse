import Koa from 'koa';
import mainRouter from '../routes/index';
import koaBody from 'koa-body';
import dbService from "../services/db";

const app = new Koa();
app.use(koaBody());
dbService.init();

//General error handling
app.use(async (ctx, next ) => {
  try {
    await next();
  } catch (err) {
    const miError = err;
    console.log(`HUBO UN ERROR ${miError.message}`);
    ctx.status = 500;
    ctx.body = { error: miError.message };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(mainRouter);

export default app;