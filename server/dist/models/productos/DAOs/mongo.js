"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Mongoose = require('mongoose');

var moment = require('moment');

var productosCollection = 'productos';
var productoSchema = new Mongoose.Schema({
  timestamp: {
    type: Date,
    "default": moment().format(),
    required: true
  },
  codigo: {
    type: String,
    "default": Date.now(),
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});
var Productos = new Mongoose.model(productosCollection, productoSchema);

var ProductosAtlasDAO = /*#__PURE__*/function () {
  function ProductosAtlasDAO() {
    (0, _classCallCheck2["default"])(this, ProductosAtlasDAO);
  }

  (0, _createClass2["default"])(ProductosAtlasDAO, [{
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
                return Productos.find({
                  _id: id
                });

              case 6:
                items = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return Productos.find();

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
        var _req$body, name, description, stock, price, imgUrl, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, name = _req$body.name, description = _req$body.description, stock = _req$body.stock, price = _req$body.price;
                console.log('body:', req.body);

                if (!(req.file === undefined)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", res.send("you must select a file."));

              case 4:
                imgUrl = "http://localhost:8080/file/".concat(req.file.filename);

                if (!(!name || !description || !stock || !price)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  msg: 'missing Body fields'
                }));

              case 7:
                data = {
                  name: name,
                  description: description,
                  stock: stock,
                  price: price
                };
                _context2.next = 10;
                return Productos.insertMany([data]).then(function (producto) {
                  res.json({
                    msg: "Producto agregado",
                    data: producto
                  });
                });

              case 10:
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
                return Productos.findOneAndUpdate({
                  _id: id
                }, data, {
                  "new": true
                }).then(function (producto) {
                  if (!producto) {
                    res.status(404).json({
                      msg: 'El producto indicado no existe'
                    });
                  }

                  res.status(200).json({
                    msg: 'Producto Actualizado',
                    producto: producto
                  });
                })["catch"](function () {
                  res.status(500).json({
                    msg: 'Error al Actualizar el producto indicado'
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
                id = req.params.id;
                _context4.next = 3;
                return Productos.deleteOne({
                  _id: id
                }).then(function (producto) {
                  if (!producto) {
                    res.status(404).json({
                      msg: 'El producto inidicado no existe'
                    });
                  }

                  res.status(200).json({
                    msg: 'Producto eliminado',
                    data: producto
                  });
                })["catch"](function () {
                  res.status(500).json({
                    msg: 'Error al Actualizar el producto indicado'
                  });
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x7, _x8) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ProductosAtlasDAO;
}();

module.exports = {
  ProductosAtlasDAO: ProductosAtlasDAO,
  productoSchema: productoSchema
};