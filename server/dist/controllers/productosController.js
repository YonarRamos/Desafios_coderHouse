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

var _productos = require("../models/productos");

var tableName = 'productos';

var Products = /*#__PURE__*/function () {
  function Products() {
    (0, _classCallCheck2["default"])(this, Products);
  }

  (0, _createClass2["default"])(Products, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var items, id;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                items = null;
                id = req.query.id;
                console.log('recibiendo ID:', id);

                if (!id) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return _productos.Productos.find({
                  _id: id
                });

              case 6:
                items = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return _productos.Productos.find();

              case 11:
                items = _context.sent;

              case 12:
                if (!(items.length == 0)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", res.status(200).json({
                  data: []
                }));

              case 16:
                res.json({
                  data: items
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, name, description, stock, price, thumbnail, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, name = _req$body.name, description = _req$body.description, stock = _req$body.stock, price = _req$body.price, thumbnail = _req$body.thumbnail;

                if (!(!name || !description || !stock || !price || !thumbnail)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
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
                _context2.next = 6;
                return _productos.Productos.insertMany([data]).then(function (producto) {
                  res.json({
                    msg: "Producto agregado",
                    data: producto
                  });
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function add(_x3, _x4) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, _req$body2, name, description, stock, price, thumbnail, data;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, stock = _req$body2.stock, price = _req$body2.price, thumbnail = _req$body2.thumbnail;

                if (!(!name || !description || !stock || !price || !thumbnail)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
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
                _context3.next = 7;
                return _productos.Productos.findOneAndUpdate({
                  _id: id
                }, data, {
                  "new": true
                }).then(function (producto) {
                  res.json({
                    msg: 'Producto Actualizado',
                    producto: producto
                  });
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function update(_x5, _x6) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;
                _context4.next = 4;
                return _productos.Productos.deleteOne({
                  _id: id
                }).then(function (producto) {
                  res.json({
                    msg: 'Producto eliminado',
                    data: producto
                  });
                });

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                res.json({
                  msg: 'Error al eliminar producto'
                });

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function _delete(_x7, _x8) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return Products;
}();

var productosController = new Products();
exports.productosController = productosController;