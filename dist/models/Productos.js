"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = [{
  title: "Lapiz",
  price: 35,
  thumbnail: 'https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png'
}, {
  title: "Calculadora",
  price: 50,
  thumbnail: 'https://cdn3.iconfinder.com/data/icons/e-commerce-and-online-shopping/64/__Calculator-256.png'
}];

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
      var title = _ref.title,
          price = _ref.price,
          thumbnail = _ref.thumbnail;
      var newProducto = {
        id: db.length + 1,
        title: title,
        price: price,
        thumbnail: thumbnail
      };
      db.push(newProducto);
      return newProducto;
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var pr = db[id - 1];
      db = db.filter(function (producto) {
        return producto.id != id;
      });
      return pr;
    }
  }, {
    key: "edit",
    value: function edit(id, body) {
      db[id - 1] = body;
      var actProd = db[id - 1];
      actProd.id = id;
      return actProd;
    }
  }]);

  return Productos;
}();

module.exports = Productos;