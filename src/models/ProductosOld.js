const fs = require('fs');
const path = require('path');
const moment = require('moment');
const dataBasePath = path.resolve(__dirname, '../../public/productos.json');
let db = fs.readFileSync(dataBasePath);
db = JSON.parse(db);

class Productos {
    constructor(){
    }
    show(){
        return db
    }
    showOne(id){
        let producto = db.filter((producto)=> producto.id == id)
        return  producto
    }
    add({name, price, thumbnail, stock, description}){
        const newProducto = {
            id: db.length + 1,
            codigo: Date.now(),
            timestamp: moment().format(),
            name,
            price,
            stock,
            description,
            thumbnail,
        }
        db.push(newProducto)
        fs.writeFileSync(dataBasePath, JSON.stringify(db))
        return newProducto
    }
    delete(id){
        let pr = db[id-1]
        db = db.filter((producto)=> producto.id != id)
        fs.writeFileSync(dataBasePath, JSON.stringify(db));
        return  pr
    }
    edit(id, body){
        db[id-1] = body
        let actProd = db[id-1]
        actProd.timestamp = moment().format(),
        actProd.id = id
        fs.writeFileSync(dataBasePath, JSON.stringify(db));
        return  actProd
    }
}

module.exports = Productos;