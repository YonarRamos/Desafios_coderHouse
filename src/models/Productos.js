/* const Mongoose = require('mongoose');
const moment = require('moment');

const productosCollection = 'productos';

const productosSchema = new Mongoose.Schema({
    timestamp:{type:Date, default: moment().format() , required:true},
    codigo: {type: String, default: Date.now() ,required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    description: {type: String, required: true },
    thumbnail: {type: String, required: true}
});

const productos = new Mongoose.model(productosCollection, productosSchema);

module.exports = { productos };
 */