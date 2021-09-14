"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var fs = require('fs');

var path = require('path');

var moment = require('moment');

var dataBasePath = path.resolve(__dirname, '../../public/productos.json');
var db = fs.readFileSync(dataBasePath);
db = JSON.parse(db);

var Productos = /*#__PURE__*/function () {
  function Productos() {
    (0, _classCallCheck2["default"])(this, Productos);
  }

  (0, _createClass2["default"])(Productos, [{
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