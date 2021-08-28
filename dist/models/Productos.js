"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var path = require('path');

var moment = require('moment');

var dataBasePath = path.resolve(__dirname, '../../public/productos.json');
var db = fs.readFileSync(dataBasePath);
db = JSON.parse(db);

var Productos = /*#__PURE__*/function () {
  function Productos() {
    _classCallCheck(this, Productos);
  }

  _createClass(Productos, [{
    key: "show",
    value: function show() {
      return db;
    }
  }, {
    key: "showOne",
    value: function showOne(id) {
      var producto = db.filter(function (producto) {
        return producto.id == id;
      });
      return producto;
    }
  }, {
    key: "add",
    value: function add(_ref) {
      var name = _ref.name,
          price = _ref.price,
          thumbnail = _ref.thumbnail,
          stock = _ref.stock,
          description = _ref.description;
      var newProducto = {
        id: db.length + 1,
        codigo: Date.now(),
        timestamp: moment().format(),
        name: name,
        price: price,
        stock: stock,
        description: description,
        thumbnail: thumbnail
      };
      db.push(newProducto);
      fs.writeFileSync(dataBasePath, JSON.stringify(db));
      return newProducto;
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var pr = db[id - 1];
      db = db.filter(function (producto) {
        return producto.id != id;
      });
      fs.writeFileSync(dataBasePath, JSON.stringify(db));
      return pr;
    }
  }, {
    key: "edit",
    value: function edit(id, body) {
      db[id - 1] = body;
      var actProd = db[id - 1];
      actProd.timestamp = moment().format(), actProd.id = id;
      fs.writeFileSync(dataBasePath, JSON.stringify(db));
      return actProd;
    }
  }]);

  return Productos;
}();

module.exports = Productos;