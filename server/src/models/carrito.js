const Mongoose = require('mongoose');
const { productoSchema } = require('./productos')
const carritossCollection = 'carritos';

const carritoSchema = new Mongoose.Schema({
  carrito:  [ productoSchema ]
});

const carrito = Mongoose.model(carritossCollection, carritoSchema);

module.exports = carrito ;