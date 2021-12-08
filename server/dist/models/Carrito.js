"use strict";

var Mongoose = require('mongoose');

var Usuario = require('../models/usuarios');

var carritosCollection = 'carritos';
var carritoSchema = new Mongoose.Schema({
  usuario: {
    type: Mongoose.ObjectId,
    ref: 'Usuario'
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