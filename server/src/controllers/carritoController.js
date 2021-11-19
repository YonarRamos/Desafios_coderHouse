import { Carrito } from '../models/carrito.js';
import { Usuario } from '../models/usuarios';

class CartClass {
  async get(req, res) {
    const { usuario_id } = req.params;
    const resCarrito = await Carrito.findOne({usuario_id});

    if (!resCarrito) {
      return res.status(404).json({
        msg: 'Carrito no existe',
      });      
    }else{
      res.json(resCarrito);
    }
  }

  async add(req, res, usuario_id) {

    const user = Usuario.findById({ _id : usuario_id } );
    if ( !user ){
      return res.status(400).json({
        msg: 'El usuario no existe',
      });
    };

    const data = {
      usuario_id,
      productos:[]
    };
    const newCart = new Carrito(data)
    newCart.save(async function (error) {
        if (error) { 
            console.error('ERROR_CARRITO_CONTRIOLLER:', error);
        } else{
          console.log('Se creo un nuevo carrito!!');
        }
    });

  }

  async apdate(req, res) {
    const { usuario_id, productos } = req.body;
    
    if ( !usuario_id ||  !productos ){
      return res.status(400).json({
        msg: 'missing Body fields',
      });     
    }
      const data = {
        usuario_id,
        productos
      };
      console.log('update', data)
    await Carrito.findOneAndUpdate({usuario_id}, data, { new: true }).then((producto) => {
      res.json({
        msg: 'Carrito Actualizado',
        producto,
      });      
    })
  }

/*   async borrar(req, res) {
    try {
      const { id } = req.params;   
      await productos.remove({_id : id}).then((producto)=>{
          res.json({ 
          msg: 'Producto eliminado',
          data: producto
        });
      });


    } catch (error) {
      res.json({
        msg: 'Error al eliminar producto',
      });      
    }
    



  } */

}
export const carritoController = new CartClass();