"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fs = require('fs');

var ProductosFSDAO = /*#__PURE__*/function () {
  function ProductosFSDAO(fileName) {
    (0, _classCallCheck2["default"])(this, ProductosFSDAO);
    var mockData = [{
      _id: '1',
      nombre: 'lapiz',
      precio: 200
    }, {
      _id: '2',
      nombre: 'cartuchera',
      precio: 250
    }, {
      _id: '3',
      nombre: 'boligoma',
      precio: 260
    }];
    this.nombreArchivo = fileName;
    this.productos = mockData;
    this.guardar();
  }

  (0, _createClass2["default"])(ProductosFSDAO, [{
    key: "leer",
    value: function () {
      var _leer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(archivo) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = JSON;
                _context.next = 3;
                return fs.promises.readFile(archivo, 'utf-8');

              case 3:
                _context.t1 = _context.sent;
                this.productos = _context.t0.parse.call(_context.t0, _context.t1);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function leer(_x) {
        return _leer.apply(this, arguments);
      }

      return leer;
    }()
  }, {
    key: "guardar",
    value: function () {
      var _guardar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fs.promises.writeFile(this.nombreArchivo, JSON.stringify(this.productos, null, '\t'));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function guardar() {
        return _guardar.apply(this, arguments);
      }

      return guardar;
    }()
  }, {
    key: "findIndex",
    value: function () {
      var _findIndex = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.leer(this.nombreArchivo);

              case 2:
                return _context3.abrupt("return", this.productos.findIndex(function (aProduct) {
                  return aProduct._id == id;
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findIndex(_x2) {
        return _findIndex.apply(this, arguments);
      }

      return findIndex;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.leer(this.nombreArchivo);

              case 2:
                return _context4.abrupt("return", this.productos.find(function (aProduct) {
                  return aProduct._id === id;
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function find(_x3) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.leer(this.nombreArchivo);

              case 2:
                if (!id) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", this.productos.filter(function (aProduct) {
                  return aProduct._id === id;
                }));

              case 4:
                return _context5.abrupt("return", this.productos);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function get(_x4) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(data) {
        var newItem;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(!data.nombre || !data.precio)) {
                  _context6.next = 2;
                  break;
                }

                throw new Error('invalid data');

              case 2:
                _context6.next = 4;
                return this.leer(this.nombreArchivo);

              case 4:
                newItem = {
                  _id: (this.productos.length + 1).toString(),
                  nombre: data.nombre,
                  precio: data.precio
                };
                this.productos.push(newItem);
                _context6.next = 8;
                return this.guardar();

              case 8:
                return _context6.abrupt("return", newItem);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function add(_x5) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, newProductData) {
        var index, oldProduct, updatedProduct;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.leer(this.nombreArchivo);

              case 2:
                _context7.next = 4;
                return this.findIndex(id);

              case 4:
                index = _context7.sent;
                oldProduct = this.productos[index];
                updatedProduct = _objectSpread(_objectSpread({}, oldProduct), newProductData);
                this.productos.splice(index, 1, updatedProduct);
                _context7.next = 10;
                return this.guardar();

              case 10:
                return _context7.abrupt("return", updatedProduct);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function update(_x6, _x7) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id) {
        var index;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.leer(this.nombreArchivo);

              case 2:
                _context8.next = 4;
                return this.findIndex(id);

              case 4:
                index = _context8.sent;
                this.productos.splice(index, 1);
                _context8.next = 8;
                return this.guardar();

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _delete(_x8) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ProductosFSDAO;
}();

module.exports = {
  ProductosFSDAO: ProductosFSDAO
};