const Mongoose = require('mongoose');
const moment = require('moment');
const config = require('../../../utils/config');

const productosCollection = 'productos';
const db = 'ecommerce';

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
    #connection
    constructor(tipo) {
      if (tipo){
        this.srv = `mongodb://localhost:27017/${db}`;
      }
      else{
        this.srv = `mongodb+srv://${config.MONGO_ATLAS_USER}:${config.MONGO_ATLAS_PASSWORD}@${config.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${config.MONGO_LOCAL_DBNAME}?retryWrites=true&w=majority`;
      }
    }
     init(){
      if(this.#connection){
        console.log('MONGO ALREADY CONNECTED!!')
        return this.#connection
      } else {
        return this.#connection =  Mongoose.createConnection(this.srv)
        .then((res)=> console.log('MONGO CONNECTED!!'))
        .catch((error)=> console.log('MONGOOSE_ERROR:', error));        
      }
    }

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

module.exports = { ProductosAtlasDAO, productoSchema};