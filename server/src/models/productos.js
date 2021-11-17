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
    cantidad:{type: Number, default: 0}
});

const Productos = new Mongoose.model(productosCollection, productoSchema);

module.exports = { Productos, productoSchema };
