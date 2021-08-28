"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var path = require('path');

var moment = require('moment');

var carritoPath = path.resolve(__dirname, '../../public/carrito.json');
var productoPath = path.resolve(__dirname, '../../public/productos.json');
var carrito = fs.readFileSync(carritoPath);
var producto = fs.readFileSync(productoPath);
carrito = JSON.parse(carrito);
producto = JSON.parse(producto);

var Carrito = /*#__PURE__*/function () {
  function Carrito() {
    _classCallCheck(this, Carrito);
  }

  _createClass(Carrito, [{
    key: "showOne",
    value: function showOne(id) {
      //let car = carrito.filter((c)=> c.id == id);
      return carrito;
    }
  }, {
    key: "add",
    value: function add(id) {
      var newProducto = producto.filter(function (producto) {
        return producto.id == id;
      });
      console.log('new', newProducto[0]);
      carrito.push({
        id: carrito.length + 1,
        timestamp: moment().format(),
        producto: newProducto[0]
      });
      fs.writeFileSync(carritoPath, JSON.stringify(carrito));
      return carrito;
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      carrito = carrito.filter(function (c) {
        return c.id != id;
      });
      fs.writeFileSync(carritoPath, JSON.stringify(carrito));
      return carrito;
    }
  }]);

  return Carrito;
}();

module.exports = Carrito;