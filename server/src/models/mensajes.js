const Mongoose = require('mongoose');
const moment = require('moment');
const mensajesCollection = 'mensajes';

const mensajesSchema = new Mongoose.Schema({
  timestamp:{ type:Date, default: moment().format() , required:true },
  user_id: { type: Mongoose.Schema.Types.ObjectId, required: true },
  messages: [{
    nombre: String,
    mensaje: String,
    timestamp:{ type:Date, default: moment().format() , required:true },
  }]
});

const Mensajes = Mongoose.model( mensajesCollection, mensajesSchema);

module.exports = {Mensajes, mensajesSchema} ;