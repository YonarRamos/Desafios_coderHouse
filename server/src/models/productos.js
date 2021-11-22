const Mongoose = require('mongoose');
const moment = require('moment');
import { composeWithMongoose } from 'graphql-compose-mongoose';

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
const productosTC = composeWithMongoose(Productos); //para trabajar con GraphQL
module.exports = { Productos, productoSchema, productosTC };