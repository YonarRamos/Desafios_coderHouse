const Mongoose = require('mongoose');
const usuariosCollection = 'usuarios'

const usuarioSchema = new Mongoose.Schema({
  email: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
  nombre: { type: String, required: true } ,
  apellido: { type: String, required: true } ,
  edad: { type: Number, required: true } ,
  alias: { type: String, required: true } ,
  avatar: { type: String, required: true }
});

const Usuario = Mongoose.model(usuariosCollection, usuarioSchema);

module.exports ={ Usuario, usuarioSchema} ;
