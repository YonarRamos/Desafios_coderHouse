import mensajes from '../models/mensajes';
import faker from '../services/faker';
import { normalize, schema } from 'normalizr';
const moment = require('moment');
const tableName = 'mensajes';

/* const author = new schema.Entity(  'author',   {},   { idAttribute: 'email' });
const msge = new schema.Entity(  'message',  {    author: author,  },  { idAttribute: 'timestamp' });
const msgesSchema = new schema.Array(msge); */

const author = new schema.Entity(  'author', {} , { idAttribute: 'email' });
const msgesSchema = new schema.Entity(  'message',  { author: author },  { idAttribute: 'timestamp' });



class Mensajes {
  async listar(req, res) {
    try {
      const items = await mensajes.get();

      if(items.length == 0){
        return res.status(404).json({
          msg: 'No hay mensajes.'
        });
      }else{
        res.json({
          data: items,
        });      
      }
    } catch (error) {
      console.error('Listar Error:', error)
    }
  }

  async listarById(req, res) {
    const { id } = req.params;
    const item = await mensajes.find({_id : id});

    if (item.length == 0) {
      return res.status(404).json({
        msg: 'mensaje no encontrado',
      });      
    }else{
      res.json({
        data: item,
      });
    }
  }

  async agregar(req, res) {
    const { author, message } = req.body;

    if ( !author ||  !message )
      return res.status(400).json({
        msg: 'Missing body fields',
      });
      message.timestamp = moment().format();
    const data = {
      author,
      message,
    };
    console.log(data);
    const normalizedData = normalize(data, msgesSchema);

    await mensajes.add(normalizedData).then(()=>{
      res.json({
        mensajes: normalizedData
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