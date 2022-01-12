const ordenesModel  = require('../models/ordenes');
const CarritoModel = require('../models/carrito');
const UsuarioModel = require('../models/usuarios/Usuario');

class ordersClass {
  async generate(req, res) {
    const { usuario_id, direccionEntrega} = req.body;
    const carrito = await CarritoModel.findOne({usuario:usuario_id}).populate('productos.producto_id');
    const usuario = await UsuarioModel.findById(usuario_id);
    let total = null;
    if(!usuario){
      return res.status(404).json({
        msg: 'Usuario invalido'
      });
    };
    if(carrito){
      total = carrito.productos.length > 0 ? carrito.productos.reduce((p1, p2) => (p1.cantidad * p1.producto_id.price) + (p2.cantidad * p2.producto_id.price)) : 0
    }
    await ordenesModel.create({
      usuario: usuario_id,
      items:carrito.productos,
      direccionEntrega,
      total
    }).then((response)=>{
      res.status(200).json({
        msg: 'Nueva orden generada',
        data: response
      });
    }).catch((error)=>{
      res.status(500).json({
        msg: 'Ha ocurrido un error al generar la orden',
        error: error
      });
      throw new Error('ERROR_GENERANDO_ORDEN',error);
    })
  }

  async delete(req, res) {
    const id = req.params.id;
    const orderResponse = await ordenesModel.findByIdAndDelete(id);

    if(orderResponse){
        res.status(200).json({
            msg:'Orden eliminada',
            data:orderResponse
        });
    } else {
        res.status(400).json({
            msg:'La orden no existe'
        })
    }
}
  
}
const ordenesController = new ordersClass();
module.exports = ordenesController ;