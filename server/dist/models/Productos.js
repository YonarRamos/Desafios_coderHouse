"use strict";

var Mongoose = require('mongoose');

var moment = require('moment');

var productosCollection = 'productos';
var productoSchema = new Mongoose.Schema({
  timestamp: {
    type: Date,
    "default": moment().format(),
    required: true
  },
  codigo: {
    type: String,
    "default": Date.now(),
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});
var Productos = new Mongoose.model(productosCollection, productoSchema);
module.exports = {
  Productos: Productos,
  productoSchema: productoSchema
};