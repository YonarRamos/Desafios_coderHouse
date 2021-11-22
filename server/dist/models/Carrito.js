"use strict";

var Mongoose = require('mongoose');

var _require = require('./productos'),
    productoSchema = _require.productoSchema;

var carritosCollection = 'carritos';
var carritoSchema = new Mongoose.Schema({
  usuario_id: {
    type: String,
    required: true
  },
  productos: [productoSchema]
});
var Carrito = Mongoose.model(carritosCollection, carritoSchema);
module.exports = {
  carritoSchema: carritoSchema,
  Carrito: Carrito
};