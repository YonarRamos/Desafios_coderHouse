"use strict";

var Mongoose = require('mongoose');

var _require = require('./productos'),
    productoSchema = _require.productoSchema;

var carritossCollection = 'carritos';
var carritoSchema = new Mongoose.Schema({
  carrito: [productoSchema]
});
var carrito = Mongoose.model(carritossCollection, carritoSchema);
module.exports = carrito;