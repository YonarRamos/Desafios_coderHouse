const Mongoose = require('mongoose');
const { productoSchema } = require('./productos')
const carritosCollection = 'carritos';

const carritoSchema = new Mongoose.Schema({
    usuario_id:{ type: String, required: true },
    productos:[ productoSchema ]
});

const Carrito = Mongoose.model(carritosCollection, carritoSchema);

module.exports = { carritoSchema, Carrito };