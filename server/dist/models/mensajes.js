"use strict";

var Mongoose = require('mongoose');

var moment = require('moment');

var mensajesCollection = 'mensajes';
var mensajesSchema = new Mongoose.Schema({
  timestamp: {
    type: Date,
    "default": moment().format(),
    required: true
  },
  user_id: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true
  },
  messages: [{
    nombre: String,
    mensaje: String,
    timestamp: {
      type: Date,
      "default": moment().format(),
      required: true
    }
  }]
});
var Mensajes = Mongoose.model(mensajesCollection, mensajesSchema);
module.exports = {
  Mensajes: Mensajes,
  mensajesSchema: mensajesSchema
};