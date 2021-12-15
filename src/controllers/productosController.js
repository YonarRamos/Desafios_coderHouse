import { Productos } from '../models/productos';

//const tableName = 'productos';

class Products {
  async get(ctx, next) {

    const items = await Productos.find();

    ctx.body = {
      status: 'success',
      productos: items,
    };

    next();   
  }

  async getById(ctx, next) {
    const id  = ctx.params.id;
    console.log('recibiendo ID:', id);

    if(id) { 
      const item = await Productos.findById(id);
      ctx.body = {
        status: 'success',
        producto: item,
      };
    }
    else{
      ctx.body = {
        status: 'success',
        productos: [],
      };
    }
    next();   
  }

   async add(ctx, next) {
    const { name, description, stock, price, thumbnail } = ctx.request.body;

    if ( !name ||  !description || !stock || !price || !thumbnail ) {
        ctx.body = {
          status: 'error!',
          message: 'Missing body fields',
        };
      };

    const data = {
      name,
      description,
      stock,
      price,
      thumbnail,
    };

   await Productos.insertMany([data]).then((producto)=>{
      ctx.body = {
        status: 'success',
        mensaje:'Producto agregado',
        producto: producto 
      };   
    });

  }

  async update(ctx, next) {
    const id  = ctx.params.id;
    const { name, description, stock, price, thumbnail } = ctx.request.body;
    
    if ( !name ||  !description || !stock || !price || !thumbnail ) {
      ctx.body = {
        status: 'error!',
        message: 'Missing body fields',
      };
    };

      const data = {
        name,
        description,
        stock,
        price,
        thumbnail,
      };

    await Productos.findOneAndUpdate({_id : id}, data, { new: true }).then((producto) => {
      ctx.body = {
        status: 'success',
        mensaje:'Producto Actualizado',
        producto: producto 
      }; 
    })
  }

  async delete(ctx, next) {
      const id  = ctx.params.id;
      await Productos.deleteOne({_id : id}).then((producto)=>{
        ctx.body = {
          status: 'success',
          mensaje:'Producto Eliminado',
          producto: producto
        };
      });
  }

}

export const productosController = new Products();