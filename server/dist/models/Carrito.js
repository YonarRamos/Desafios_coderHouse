"use strict";

var Mongoose = require('mongoose');

var carritosCollection = 'carritos';
var carritoSchema = new Mongoose.Schema({
  usuario_id: {
    type: String,
    required: true
  },
  productos: [{
    producto_id: {
      type: String,
      required: true
    },
    cantidad: {
      type: Number,
      "default": 1
    }
  }]
});
var Carrito = Mongoose.model(carritosCollection, carritoSchema);
module.exports = {
  carritoSchema: carritoSchema,
  Carrito: Carrito
};