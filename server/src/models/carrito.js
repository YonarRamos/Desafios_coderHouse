const Mongoose = require('mongoose');
const carritosCollection = 'carritos';

const carritoSchema = new Mongoose.Schema({
    usuario_id:{ type: String, required: true },
    productos:[ {
        producto_id:{type: String, required: true},
        cantidad:{type: Number, default: 1 }
    } ]
});

const Carrito = Mongoose.model(carritosCollection, carritoSchema);

module.exports = { carritoSchema, Carrito };