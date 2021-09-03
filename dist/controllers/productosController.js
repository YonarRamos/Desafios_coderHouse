"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productosController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../services/db");

var tableName = 'productos';

var Products = /*#__PURE__*/function () {
  function Products() {
    (0, _classCallCheck2["default"])(this, Products);
  }

  (0, _createClass2["default"])(Products, [{
    key: "listar",
    value: function () {
      var _listar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var items;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db.DBService.get(tableName);

              case 3:
                items = _context.sent;

                if (!(items.length == 0)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  msg: 'No hay productos cargados.'
                }));

              case 8:
                res.json({
                  data: items
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.error('Listar Error:', _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function listar(_x, _x2) {
        return _listar.apply(this, arguments);
      }

      return listar;
    }()
  }, {
    key: "listarById",
    value: function () {
      var _listarById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, item;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                _context2.next = 3;
                return _db.DBService.getById(tableName, id);

              case 3:
                item = _context2.sent;

                if (!(item.length == 0)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  msg: 'Producto no encontrado'
                }));

              case 8:
                res.json({
                  data: item
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function listarById(_x3, _x4) {
        return _listarById.apply(this, arguments);
      }

      return listarById;
    }()
  }, {
    key: "agregar",
    value: function () {
      var _agregar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body, codigo, name, description, stock, price, thumbnail, data, newId, newProduct;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, codigo = _req$body.codigo, name = _req$body.name, description = _req$body.description, stock = _req$body.stock, price = _req$body.price, thumbnail = _req$body.thumbnail;

                if (!(!codigo || !name || !description || !stock || !price || !thumbnail)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  msg: 'missing Body fields'
                }));

              case 3:
                data = {
                  codigo: codigo,
                  name: name,
                  description: description,
                  stock: stock,
                  price: price,
                  thumbnail: thumbnail
                };
                _context3.next = 6;
                return _db.DBService.create(tableName, data);

              case 6:
                newId = _context3.sent;
                _context3.next = 9;
                return _db.DBService.getById(tableName, newId);

              case 9:
                newProduct = _context3.sent;
                res.json({
                  msg: "Producto agregado",
                  data: newProduct
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function agregar(_x5, _x6) {
        return _agregar.apply(this, arguments);
      }

      return agregar;
    }()
  }, {
    key: "actualizar",
    value: function () {
      var _actualizar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, _req$body2, codigo, name, description, stock, price, thumbnail, item, data;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _req$body2 = req.body, codigo = _req$body2.codigo, name = _req$body2.name, description = _req$body2.description, stock = _req$body2.stock, price = _req$body2.price, thumbnail = _req$body2.thumbnail;

                if (!(!codigo || !name || !description || !stock || !price || !thumbnail)) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: 'missing Body fields'
                }));

              case 4:
                _context4.next = 6;
                return _db.DBService.getById(tableName, id);

              case 6:
                item = _context4.sent;

                if (item.length) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return", res.status(404).json({
                  msgs: 'Product not found!'
                }));

              case 9:
                data = {
                  codigo: codigo,
                  name: name,
                  description: description,
                  stock: stock,
                  price: price,
                  thumbnail: thumbnail
                };
                _context4.next = 12;
                return _db.DBService.update(tableName, id, data);

              case 12:
                _context4.next = 14;
                return _db.DBService.getById(tableName, id);

              case 14:
                item = _context4.sent;
                res.json({
                  msg: 'Producto Actualizado',
                  item: item
                });

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function actualizar(_x7, _x8) {
        return _actualizar.apply(this, arguments);
      }

      return actualizar;
    }()
  }, {
    key: "borrar",
    value: function () {
      var _borrar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params.id;
                _context5.next = 4;
                return _db.DBService["delete"](tableName, id);

              case 4:
                res.json({
                  msg: 'Producto eliminado'
                });
                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                res.json({
                  msg: 'Error al eliminar producto'
                });

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function borrar(_x9, _x10) {
        return _borrar.apply(this, arguments);
      }

      return borrar;
    }()
  }]);
  return Products;
}();

var productosController = new Products();
exports.productosController = productosController;