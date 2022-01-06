const Mongoose = require('mongoose');
const carritosCollection = 'carritos';

const carritoSchema = new Mongoose.Schema({
    usuario: { type: Mongoose.ObjectId, ref: 'Usuario' },
    productos:[ {
        producto_id:{type: String, required: true},
        cantidad:{type: Number, default: 1 }
    } ]
});

module.exports = Mongoose.models.carritos ||  Mongoose.model(carritosCollection, carritoSchema);
