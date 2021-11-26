"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var moment = require('moment');

var ProductsMemDAO = /*#__PURE__*/function () {
  function ProductsMemDAO() {
    (0, _classCallCheck2["default"])(this, ProductsMemDAO);
    this.productos = [{
      "id": "1",
      "timestamp": "2021-08-28T15:54:54-03:00",
      "codigo": "1630176186406",
      "name": "Lapiz",
      "description": "lorem ipsum",
      "price": 35,
      "thumbnail": "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png",
      "stock": 45
    }, {
      "name": "Calculadora",
      "description": "lorem ipsum dolor",
      "price": 125,
      "thumbnail": "https://cdn2.iconfinder.com/data/icons/draw-and-design/512/esquadra-2-256.png",
      "stock": 60,
      "timestamp": "2021-08-28T16:08:28-03:00",
      "id": "2"
    }];
  }

  (0, _createClass2["default"])(ProductsMemDAO, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!id) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.productos.filter(function (aProduct) {
                  return aProduct.id === id;
                }));

              case 2:
                return _context.abrupt("return", this.productos);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        var newItem;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newItem = {
                  id: (this.productos.length + 1).toString(),
                  timestamp: moment().format(),
                  codigo: Date.now(),
                  name: data.name,
                  description: data.description,
                  price: data.price,
                  thumbnail: data.thumbnail,
                  stock: 45
                };
                this.productos.push(newItem);
                return _context2.abrupt("return", newItem);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function add(_x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, newProductData) {
        var index, oldProduct, updatedProduct;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                index = this.findIndex(id);
                console.log('indice', index);
                oldProduct = this.productos[index];
                this.productos[index] = _objectSpread({
                  id: oldProduct.id,
                  timestamp: oldProduct.timestamp,
                  codigo: oldProduct.codigo
                }, newProductData);
                updatedProduct = this.productos[index];
                console.log('new', updatedProduct);
                return _context3.abrupt("return", updatedProduct);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var index;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                index = this.findIndex(id);
                this.productos.splice(index, 1);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /*   async query(options){
        type Conditions = (aProduct: ProductI) => boolean;
        const query: Conditions[] = [];
    
        if (options.nombre)
          query.push((aProduct: ProductI) => aProduct.nombre == options.nombre);
    
        if (options.precio)
          query.push((aProduct: ProductI) => aProduct.precio == options.precio);
    
        return this.productos.filter((aProduct) => query.every((x) => x(aProduct)));
      } */

  }]);
  return ProductsMemDAO;
}();

var ProductosMemDAO = new ProductsMemDAO();
module.exports = {
  ProductosMemDAO: ProductosMemDAO
};