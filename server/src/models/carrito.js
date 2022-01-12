const Mongoose = require('mongoose');
const carritosCollection = 'carritos';
const moment = require('moment');

const carritoSchema = new Mongoose.Schema({
    usuario: { type: Mongoose.Schema.Types.ObjectId, ref: 'usuarios' },
    productos:[ {
        producto_id:{ type: Mongoose.Schema.Types.ObjectId, ref: 'productos' },
        cantidad:{type: Number, default: 1 }
    } ],
    timeStamp:{ type:Date, default: moment().format() }
});

module.exports = Mongoose.models.carritos ||  Mongoose.model(carritosCollection, carritoSchema);
