import { Productos } from '../models/productos';

const tableName = 'productos';

class Products {
  async get(req, res) {
    let items = null;
    const { id } = req.query;
    console.log('recibiendo ID:', id);
    if(id) { 
      items = await Productos.find({_id : id});
    }
    else{
      items = await Productos.find();
    }

    if (items.length == 0) {
      return res.status(200).json({
        data: [],
      });      
    }else{
      res.json({
        data: items,
      });
    }
  }

   async add(req, res) {
    const { name, description, stock, price, thumbnail } = req.body;

    if ( !name ||  !description || !stock || !price || !thumbnail )
      return res.status(400).json({
        msg: 'missing Body fields',
      });

    const data = {
      name,
      description,
      stock,
      price,
      thumbnail,
    };

   await Productos.insertMany([data]).then((producto)=>{
      res.json({
        msg:"Producto agregado",
        data: producto,
      });      
    })

  }

  async update(req, res) {
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
    await Productos.findOneAndUpdate({_id : id}, data, { new: true }).then((producto) => {
      res.json({
        msg: 'Producto Actualizado',
        producto,
      });      
    })
  }

  async delete(req, res) {
    try {
      const { id } = req.params;   
      await Productos.deleteOne({_id : id}).then((producto)=>{
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
  }

}

export const productosController = new Products();