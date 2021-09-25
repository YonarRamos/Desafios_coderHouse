
// const fs = require('fs');
// const path = require('path');
// const moment = require('moment');
// const carritoPath = path.resolve(__dirname, '../../public/carrito.json');
// const productoPath = path.resolve(__dirname, '../../public/productos.json');
// let carrito = fs.readFileSync(carritoPath);
// let producto = fs.readFileSync(productoPath);
// //carrito = JSON.parse(carrito);
// producto = JSON.parse(producto);

// class Carrito {
//     constructor(){}

//     showOne(id){
//         //let car = carrito.filter((c)=> c.id == id);
//         return  carrito;
//     }
//      add(id){
//         const newProducto = producto.filter((producto)=> producto.id == id);
//         console.log('new', newProducto[0]);
//         carrito.push({
//             id: carrito.length + 1,
//             timestamp: moment().format(),
//             producto: newProducto[0]
//         })
//         fs.writeFileSync(carritoPath, JSON.stringify(carrito));
//         return carrito;
//     }
//     delete(id){
//         carrito = carrito.filter((c)=> c.id != id);
//         fs.writeFileSync(carritoPath, JSON.stringify(carrito));
//         return  carrito;
//     }
// }

// module.exports = Carrito;