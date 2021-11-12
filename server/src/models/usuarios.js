const Mongoose = require('mongoose');
import bcrypt from 'bcrypt';
const usuariosCollection = 'usuarios'

const usuarioSchema = new Mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nombre: { type: String, required: true } ,
  apellido: { type: String, required: true } ,
  edad: { type: Number, required: true } ,
  alias: { type: String, required: true } ,
  avatar: { type: String, required: true },
  telefono: { type: String, required: true },
});

usuarioSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);

  this.password = hash;
  next();
});

usuarioSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const Usuario = Mongoose.model(usuariosCollection, usuarioSchema);

module.exports = { usuarioSchema, Usuario };