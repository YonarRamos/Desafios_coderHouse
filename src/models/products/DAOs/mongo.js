const Mongoose = require('mongoose');
const moment = require('moment');
/* import {
  newProductI,
  ProductI,
  ProductBaseClass,
  ProductQuery,
} from '../products.interface'; */
const Config = require('../../../config');

const productsSchema = new Mongoose.Schema({
  timestamp:{type:Date, default: moment().format() , required:true},
  codigo: {type: String, default: Date.now() ,required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  stock: {type: Number, required: true},
  description: {type: String, required: true },
  thumbnail: {type: String, required: true}
});

class ProductosAtlasDAO {
  constructor(local = false) {
    if (local)
      this.srv = `mongodb://localhost:27017/${Config.MONGO_LOCAL_DBNAME}`;
    else
      this.srv = `mongodb+srv://${Config.MONGO_ATLAS_USER}:${Config.MONGO_ATLAS_PASSWORD}@${Config.MONGO_ATLAS_CLUSTER}/${Config.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`;
    mongoose.connect(this.srv);
    this.productos = mongoose.model('producto', productsSchema);
  }

  async get(id){
    let output = [];
    try {
      if (id) {
        const document = await this.productos.findById(id);
        if (document) output.push(document);
      } else {
        output = await this.productos.find();
      }

      return output;
    } catch (err) {
      return output;
    }
  }

  async add(data){
    if (!data.nombre || !data.precio) throw new Error('invalid data');

    const newProduct = new this.productos(data);
    await newProduct.save();

    return newProduct;
  }

  async update(id, newProductData){
    return this.productos.findByIdAndUpdate(id, newProductData);
  }

  async delete(id) {
    await this.productos.findByIdAndDelete(id);
  }

  async query(options) {
    let query = {};

    if (options.nombre) query.nombre = options.nombre;

    if (options.precio) query.precio = options.precio;

    return this.productos.find(query);
  }
}

module.exports = ProductosAtlasDAO;