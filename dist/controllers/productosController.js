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

var _dbServices = require("../services/dbServices");

var _productos = _interopRequireDefault(require("../models/productos.js"));

var tableName = 'productos';

var Products = /*#__PURE__*/function () {
  function Products() {
    (0, _classCallCheck2["default"])(this, Products);
  }

  (0, _createClass2["default"])(Products, [{
    key: "fakerProducts",
    value: function () {
      var _fakerProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var cant, items;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(req.query);
                cant = Object.keys(req.query).length == 0 ? 10 : Number(req.query.cant);
                _context.prev = 2;
                items = _dbServices.fakeProducts.get(cant);

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
                _context.t0 = _context["catch"](2);
                console.error('Listar Error:', _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      function fakerProducts(_x, _x2) {
        return _fakerProducts.apply(this, arguments);
      }

      return fakerProducts;
    }()
  }, {
    key: "listar",
    value: function () {
      var _listar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var items;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _productos["default"].find();

              case 3:
                items = _context2.sent;
                console.log(items);

                if (!(items.length == 0)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  msg: 'No hay productos cargados.'
                }));

              case 9:
                res.json({
                  data: items
                });

              case 10:
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                console.error('Listar Error:', _context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      function listar(_x3, _x4) {
        return _listar.apply(this, arguments);
      }

      return listar;
    }()
  }, {
    key: "listarById",
    value: function () {
      var _listarById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, item;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.next = 3;
                return _productos["default"].find({
                  _id: id
                });

              case 3:
                item = _context3.sent;

                if (!(item.length == 0)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", res.status(404).json({
                  msg: 'Producto no encontrado'
                }));

              case 8:
                res.json({
                  data: item
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function listarById(_x5, _x6) {
        return _listarById.apply(this, arguments);
      }

      return listarById;
    }()
  }, {
    key: "agregar",
    value: function () {
      var _agregar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var _req$body, name, description, stock, price, thumbnail, data;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body = req.body, name = _req$body.name, description = _req$body.description, stock = _req$body.stock, price = _req$body.price, thumbnail = _req$body.thumbnail;

                if (!(!name || !description || !stock || !price || !thumbnail)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: 'missing Body fields'
                }));

              case 3:
                data = {
                  name: name,
                  description: description,
                  stock: stock,
                  price: price,
                  thumbnail: thumbnail
                };
                _context4.next = 6;
                return _productos["default"].insertMany([data]).then(function (producto) {
                  res.json({
                    msg: "Producto agregado",
                    data: producto
                  });
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function agregar(_x7, _x8) {
        return _agregar.apply(this, arguments);
      }

      return agregar;
    }()
  }, {
    key: "actualizar",
    value: function () {
      var _actualizar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, _req$body2, name, description, stock, price, thumbnail, data;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, stock = _req$body2.stock, price = _req$body2.price, thumbnail = _req$body2.thumbnail;

                if (!(!name || !description || !stock || !price || !thumbnail)) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", res.status(400).json({
                  msg: 'missing Body fields'
                }));

              case 4:
                data = {
                  name: name,
                  description: description,
                  stock: stock,
                  price: price,
                  thumbnail: thumbnail
                };
                console.log('update', data);
                _context5.next = 8;
                return _productos["default"].findOneAndUpdate({
                  _id: id
                }, data, {
                  "new": true
                }).then(function (producto) {
                  res.json({
                    msg: 'Producto Actualizado',
                    producto: producto
                  });
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function actualizar(_x9, _x10) {
        return _actualizar.apply(this, arguments);
      }

      return actualizar;
    }()
  }, {
    key: "borrar",
    value: function () {
      var _borrar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                id = req.params.id;
                _context6.next = 4;
                return _productos["default"].remove({
                  _id: id
                }).then(function (producto) {
                  res.json({
                    msg: 'Producto eliminado',
                    data: producto
                  });
                });

              case 4:
                _context6.next = 9;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                res.json({
                  msg: 'Error al eliminar producto'
                });

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }));

      function borrar(_x11, _x12) {
        return _borrar.apply(this, arguments);
      }

      return borrar;
    }()
  }]);
  return Products;
}();

var productosController = new Products();
exports.productosController = productosController;