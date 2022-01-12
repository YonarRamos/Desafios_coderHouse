const CarritoModel  = require('../models/carrito');
const ProductosModel = require('../models/productos/productos');
const Mongoose = require('mongoose');

class CartClass {
  async create(usuario) {
    if ( !usuario ){
      console.log('El usurio no existe');
       throw new Error('El usurio no existe');
    };    
  
    await CarritoModel.create({
      usuario: usuario,
      productos:[]
    }).then(()=>{
      console.log('Se creo un nuevo carrito!!');
    }).catch((error)=>{
      throw new Error('ERROR_CREANDO_CARRITO',error);
    })
  }
  async get(req, res) {
    const {usuario_id} = req.params;
    const resCarrito = await CarritoModel.findOne({usuario:Mongoose.Types.ObjectId(usuario_id)});
    if (!resCarrito) {
      res.status(404).json({
        msg: 'El carrito no existe'
      });    
    }else{
      res.status(200).json({
        data: resCarrito
      });
    }
  }

  async destroy(user_id) {
    const resCarrito = await CarritoModel.findOneAndDelete({usuario:user_id});
    console.log('resCarrito', resCarrito);
    if (!resCarrito) {
      throw new Error('El carrito no existe');
    } else {
      console.log('Carrito eliminado');
    }
  }

  async addItem( req, res) {
    const { usuario_id, producto } = req.body;
    if(!usuario_id || !producto){
      res.status(400).json({
        msg: 'Missing body fields',
    });           
    }
    const resCarrito = await CarritoModel.findOne({usuario:usuario_id});
    console.log('resCarrito:', resCarrito);
    if (!resCarrito) {
      res.status(404).json({
        msg: 'El Carrito no existe',
    });      
    } else {
      const resProducto = await ProductosModel.findById(producto.producto_id);
      console.log('resProducto', resProducto);
      if(resProducto){
        let index = resCarrito.productos.findIndex((element) => element.producto_id == producto.producto_id);
        if(index == -1){
          resCarrito.productos.push(producto);
          await resCarrito.save().then((response)=>{
            res.status(200).json({
              msg:"Producto agregado",
              data:response
            });
          });
        } else {
          res.status(402).json({
            msg:"Esta intentando agregar un producto que ya existe",
          });
        }       
      } else {
        res.status(401).json({
          msg:"Producto invalido",
        });
      }
    }
  }

  async updateItem( req, res) {
    const usuario_id = req.params.usuario_id;
    const { producto } = req.body;
    const resCarrito = await CarritoModel.findOne({usuario:usuario_id});

    if (!resCarrito) {
      res.status(404).json({
        msg: 'El Carrito no existe',
    });      
    } else {
      let index = resCarrito.productos.findIndex((element) => element.producto_id == producto.producto_id)
      if(index != -1){
        resCarrito.productos[index].cantidad = producto.cantidad;
        await resCarrito.save().then((response)=>{
          res.status(200).json({
            msg:"item actualizado",
            data:response
          });
        });
      } else{
        res.status(400).json({
          msg:"El producto indicado no existe",
        });
      }
    }
  }

  async deleteItem( req, res) {
    const usuario_id = req.params.usuario_id;
    const producto_id = req.params.producto_id;
    console.log(req.params.usuario_id);
    console.log(req.params.producto_id);
    const resCarrito = await CarritoModel.findOne({ usuario:usuario_id });
    console.log(resCarrito);

    if (!resCarrito) {
       res.status(404).json({
        msg: 'El Carrito no existe',
      });      
    } else {
      let index = resCarrito.productos.findIndex((element) => element.producto_id == producto_id)
      if(index != -1){
        resCarrito.productos.splice(index,1);
        await resCarrito.save().then((response)=>{
           res.status(200).json({
            msg:"item borrado",
            data:response
          });
        });
      } else{
         res.status(400).json({
          msg:"El producto indicado no existe"
        });    
      }
    }
  }
}
const carritoController = new CartClass();
module.exports = carritoController ;