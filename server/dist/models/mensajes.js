"use strict";

var Mongoose = require('mongoose');

var _require = require('./usuarios'),
    usuarioSchema = _require.usuarioSchema;

var carritosCollection = 'carritos';
var mensajesSchema = new Mongoose.Schema({
  author: usuarioSchema,
  message: {
    text: String,
    timestamp: Date
  }
});
var mensajes = Mongoose.model(carritosCollection, mensajesSchema);
module.exports = mensajes;