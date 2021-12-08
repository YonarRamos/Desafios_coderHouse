import { Carrito } from '../models/carrito.js';
const Mongoose = require('mongoose');

class CartClass {
  async get(usuario_id) {
    console.log('usuario_id', usuario_id.usuario_id);
    const resCarrito = await Carrito.findOne({usuario:Mongoose.Types.ObjectId(usuario_id.usuario_id)});
    console.log('USUARIOOO', resCarrito);
    if (!resCarrito) {
      return {
        msg: 'Carrito no existe',
      };      
    }else{
      return resCarrito
    }
  }

  async create(usuario) {
      if ( !usuario ){
        console.log('El usurio no existe');
         throw new Error('El usurio no existe');
      };    
    
      await Carrito.create({
        usuario: usuario,
        productos:[]
      }).then(()=>{
        console.log('Se creo un nuevo carrito!!');
      }).catch((error)=>{
        throw new Error('ERROR_CREANDO_CARRITO',error);
      })

  }

/*   async add( usuario_id, producto) {
    //const { usuario, productos } = req.body;
    const resCarrito = await Carrito.findOne({usuario_id:usuario_id});

    if (!resCarrito) {
      return {
        msg: 'Carrito no existe',
      };      
    }else{
      let index = resCarrito.productos.findIndex((element) => element.producto_id > producto.producto_id)
      if(index == -1){
        resCarrito.productos.push(producto);
        await resCarrito.save().then((res)=>{
          return res;
        });
      } else{
        resCarrito[index].cantidad = producto.cantidad;
        await resCarrito.save().then((res)=>{
          return res;
        });
      }
    }

  } */

}
const carritoController = new CartClass();
module.exports = { carritoController };