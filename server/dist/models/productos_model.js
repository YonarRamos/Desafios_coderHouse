"use strict";

var Mongoose = require('mongoose');

var moment = require('moment');

var productosCollection = 'productos';
var productosSchema = new Mongoose.Schema({
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
var productos = new Mongoose.model(productosCollection, productosSchema);
module.exports = productos;