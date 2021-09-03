"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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
    (0, _classCallCheck2["default"])(this, Carrito);
  }

  (0, _createClass2["default"])(Carrito, [{
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