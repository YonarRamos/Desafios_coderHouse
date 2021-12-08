const Mongoose = require('mongoose');
const Usuario = require('../models/usuarios');
const carritosCollection = 'carritos';

const carritoSchema = new Mongoose.Schema({
    usuario: { type: Mongoose.ObjectId, ref: 'Usuario' },
    productos:[ {
        producto_id:{type: String, required: true},
        cantidad:{type: Number, default: 1 }
    } ]
});

const Carrito = Mongoose.model(carritosCollection, carritoSchema);

module.exports = { carritoSchema, Carrito };