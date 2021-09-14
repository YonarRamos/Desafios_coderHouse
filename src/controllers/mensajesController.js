import { DBService } from '../services/db';
import mensajes from '../models/mensajes';
const tableName = 'productos';

class Mensajes {
  async listar(req, res) {
    try {
      const items = await mensajes.find();
      console.log(items);
      if(items.length == 0){
        return res.status(404).json({
          msg: 'No hay mensajes.'
        })
      }else{
        res.json({
          data: items,
        });      
      }
    } catch (error) {
      console.error('Listar Error:', error)
    }
  }

/*   async listarById(req, res) {
    const { id } = req.params;
    const item = await productos.find({_id : id});

    if (item.length == 0) {
      return res.status(404).json({
        msg: 'Producto no encontrado',
      });      
    }else{
      res.json({
        data: item,
      });
    }
  } */

  async agregar(req, res) {
    const { user, msg } = req.body;

    if ( !user ||  !msg )
      return res.status(400).json({
        msg: 'missing Body fields',
      });

    const data = {
      user,
      msg,
    };

    await mensajes.insertMany([data]).then((mensaje)=>{
      res.json({
        data: mensaje,
      });      
    })

  }

/*   async actualizar(req, res) {
    const { id } = req.params;
    const { name, description, stock, price, thumbnail } = req.body;
    
    if ( !name ||  !description || !stock || !price || !thumbnail ){
      return res.status(400).json({
        msg: 'missing Body fields',
      });     
    }
      const data = {
        name,
        description,
        stock,
        price,
        thumbnail,
      };
      console.log('update', data)
    await productos.findOneAndUpdate({_id : id}, data, { new: true }).then((producto) => {
      res.json({
        msg: 'Producto Actualizado',
        producto,
      });      
    })
  }

  async borrar(req, res) {
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
    



  }*/

}
export const mensajesController = new Mensajes();