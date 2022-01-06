const Mongoose = require('mongoose');
const moment = require('moment');

const productosCollection = 'productos';
const productoSchema = new Mongoose.Schema({
    timestamp:{type:Date, default: moment().format() , required:true},
    codigo: {type: String, default: Date.now() ,required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    description: {type: String, required: true },
    thumbnail: {type: String, required: true},
});

const Productos = new Mongoose.model(productosCollection, productoSchema);

class ProductosAtlasDAO {
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
    const { name, description, stock, price } = req.body;
    console.log('body:', req.body)
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:8080/file/${req.file.filename}`;
    if ( !name ||  !description || !stock || !price ) {
      return res.status(400).json({
        msg: 'missing Body fields',
      });      
    }


    const data = {
      name,
      description,
      stock,
      price
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
      if(!producto){
        res.status(404).json({
          msg: 'El producto indicado no existe'
        });        
      }
      res.status(200).json({
        msg: 'Producto Actualizado',
        producto,
      });      
    })
    .catch(()=>{
      res.status(500).json({
        msg: 'Error al Actualizar el producto indicado'
      });  
    });
  }

  async delete(req, res) {
    const { id } = req.params;   
      await Productos.deleteOne({_id : id}).then((producto)=>{
        if(!producto){
          res.status(404).json({ 
            msg: 'El producto inidicado no existe',
          });          
        }

        res.status(200).json({ 
          msg: 'Producto eliminado',
          data: producto
        });
      })
      .catch(()=>{
        res.status(500).json({
          msg: 'Error al Actualizar el producto indicado'
        });  
      });
  }
} 

module.exports = { ProductosAtlasDAO, productoSchema};