const Mongoose = require('mongoose');
const ordenesCollection = 'ordenes';
const moment = require('moment');

const ordenesSchema = new Mongoose.Schema({
    usuario: { type: Mongoose.Schema.Types.ObjectId, ref: 'usuarios' },
    items:{ type: Array, ref: 'carritos' } ,
    direccionEntrega:{
        calle: { type: String, required: true },
        altura: { type: Number, required: true },
        codigoPostal: { type: String, required: true},
        piso: { type: Number },
        departamento: { type: String },
    },
    timeStamp:{ type:Date, default: moment().format() },
    estado: { type: String, default: 'generado' },
    total: { type:Number }
});

module.exports = Mongoose.models.ordenes ||  Mongoose.model(ordenesCollection, ordenesSchema);
