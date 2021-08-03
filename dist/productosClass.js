"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var db = [];

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
      db.filter(function (producto) {
        return producto.id != id;
      }), _readOnlyError("db");
      return producto;
    }
  }, {
    key: "edit",
    value: function edit(id, body) {
      var index = db.findIndex(function (producto) {
        return producto.id == id;
      });
      db[index] = body;
      var actProd = db[index];
      actProd.id = id;
      return actProd;
    }
  }]);

  return Productos;
}();

var _default = Productos;
exports["default"] = _default;