const Mongoose = require('mongoose');
const moment = require('moment');

const mensajesCollection = 'mensajes';

const mensajesSchema = new Mongoose.Schema({
    timestamp:{type: Date, default: moment().format() , required:true},
    user: {type: String, required: true},
    msg: {type: String, required: true},
});

const mensajes = new Mongoose.model(mensajesCollection, mensajesSchema);

module.exports = mensajes;
