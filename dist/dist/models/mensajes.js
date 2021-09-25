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
  user: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  }
});
var mensajes = new Mongoose.model(mensajesCollection, mensajesSchema);
module.exports = mensajes;