const Mongoose = require('mongoose');
const { usuarioSchema } = require('./usuarios');
const carritosCollection = 'carritos';

const mensajesSchema = new Mongoose.Schema({
  author: usuarioSchema,
  message: {
    text: String,
    timestamp: Date,
  }
});

const mensajes = Mongoose.model(carritosCollection, mensajesSchema);

module.exports = mensajes ;