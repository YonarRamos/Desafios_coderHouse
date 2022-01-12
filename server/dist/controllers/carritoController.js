"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var CarritoModel = require('../models/carrito');

var ProductosModel = require('../models/productos/productos');

var Mongoose = require('mongoose');

var CartClass = /*#__PURE__*/function () {
  function CartClass() {
    (0, _classCallCheck2["default"])(this, CartClass);
  }

  (0, _createClass2["default"])(CartClass, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(usuario) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (usuario) {
                  _context.next = 3;
                  break;
                }

                console.log('El usurio no existe');
                throw new Error('El usurio no existe');

              case 3:
                ;
                _context.next = 6;
                return CarritoModel.create({
                  usuario: usuario,
                  productos: []
                }).then(function () {
                  console.log('Se creo un nuevo carrito!!');
                })["catch"](function (error) {
                  throw new Error('ERROR_CREANDO_CARRITO', error);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var usuario_id, resCarrito;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                usuario_id = req.params.usuario_id;
                _context2.next = 3;
                return CarritoModel.findOne({
                  usuario: Mongoose.Types.ObjectId(usuario_id)
                });

              case 3:
                resCarrito = _context2.sent;

                if (!resCarrito) {
                  res.status(404).json({
                    msg: 'El carrito no existe'
                  });
                } else {
                  res.status(200).json({
                    data: resCarrito
                  });
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function get(_x2, _x3) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "destroy",
    value: function () {
      var _destroy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user_id) {
        var resCarrito;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return CarritoModel.findOneAndDelete({
                  usuario: user_id
                });

              case 2:
                resCarrito = _context3.sent;
                console.log('resCarrito', resCarrito);

                if (resCarrito) {
                  _context3.next = 8;
                  break;
                }

                throw new Error('El carrito no existe');

              case 8:
                console.log('Carrito eliminado');

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function destroy(_x4) {
        return _destroy.apply(this, arguments);
      }

      return destroy;
    }()
  }, {
    key: "addItem",
    value: function () {
      var _addItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var _req$body, usuario_id, producto, resCarrito, resProducto, index;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body = req.body, usuario_id = _req$body.usuario_id, producto = _req$body.producto;

                if (!usuario_id || !producto) {
                  res.status(400).json({
                    msg: 'Missing body fields'
                  });
                }

                _context4.next = 4;
                return CarritoModel.findOne({
                  usuario: usuario_id
                });

              case 4:
                resCarrito = _context4.sent;
                console.log('resCarrito:', resCarrito);

                if (resCarrito) {
                  _context4.next = 10;
                  break;
                }

                res.status(404).json({
                  msg: 'El Carrito no existe'
                });
                _context4.next = 26;
                break;

              case 10:
                _context4.next = 12;
                return ProductosModel.findById(producto.producto_id);

              case 12:
                resProducto = _context4.sent;
                console.log('resProducto', resProducto);

                if (!resProducto) {
                  _context4.next = 25;
                  break;
                }

                index = resCarrito.productos.findIndex(function (element) {
                  return element.producto_id == producto.producto_id;
                });

                if (!(index == -1)) {
                  _context4.next = 22;
                  break;
                }

                resCarrito.productos.push(producto);
                _context4.next = 20;
                return resCarrito.save().then(function (response) {
                  res.status(200).json({
                    msg: "Producto agregado",
                    data: response
                  });
                });

              case 20:
                _context4.next = 23;
                break;

              case 22:
                res.status(402).json({
                  msg: "Esta intentando agregar un producto que ya existe"
                });

              case 23:
                _context4.next = 26;
                break;

              case 25:
                res.status(401).json({
                  msg: "Producto invalido"
                });

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function addItem(_x5, _x6) {
        return _addItem.apply(this, arguments);
      }

      return addItem;
    }()
  }, {
    key: "updateItem",
    value: function () {
      var _updateItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var usuario_id, producto, resCarrito, index;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                usuario_id = req.params.usuario_id;
                producto = req.body.producto;
                _context5.next = 4;
                return CarritoModel.findOne({
                  usuario: usuario_id
                });

              case 4:
                resCarrito = _context5.sent;

                if (resCarrito) {
                  _context5.next = 9;
                  break;
                }

                res.status(404).json({
                  msg: 'El Carrito no existe'
                });
                _context5.next = 17;
                break;

              case 9:
                index = resCarrito.productos.findIndex(function (element) {
                  return element.producto_id == producto.producto_id;
                });

                if (!(index != -1)) {
                  _context5.next = 16;
                  break;
                }

                resCarrito.productos[index].cantidad = producto.cantidad;
                _context5.next = 14;
                return resCarrito.save().then(function (response) {
                  res.status(200).json({
                    msg: "item actualizado",
                    data: response
                  });
                });

              case 14:
                _context5.next = 17;
                break;

              case 16:
                res.status(400).json({
                  msg: "El producto indicado no existe"
                });

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateItem(_x7, _x8) {
        return _updateItem.apply(this, arguments);
      }

      return updateItem;
    }()
  }, {
    key: "deleteItem",
    value: function () {
      var _deleteItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var usuario_id, producto_id, resCarrito, index;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                usuario_id = req.params.usuario_id;
                producto_id = req.params.producto_id;
                console.log(req.params.usuario_id);
                console.log(req.params.producto_id);
                _context6.next = 6;
                return CarritoModel.findOne({
                  usuario: usuario_id
                });

              case 6:
                resCarrito = _context6.sent;
                console.log(resCarrito);

                if (resCarrito) {
                  _context6.next = 12;
                  break;
                }

                res.status(404).json({
                  msg: 'El Carrito no existe'
                });
                _context6.next = 20;
                break;

              case 12:
                index = resCarrito.productos.findIndex(function (element) {
                  return element.producto_id == producto_id;
                });

                if (!(index != -1)) {
                  _context6.next = 19;
                  break;
                }

                resCarrito.productos.splice(index, 1);
                _context6.next = 17;
                return resCarrito.save().then(function (response) {
                  res.status(200).json({
                    msg: "item borrado",
                    data: response
                  });
                });

              case 17:
                _context6.next = 20;
                break;

              case 19:
                res.status(400).json({
                  msg: "El producto indicado no existe"
                });

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteItem(_x9, _x10) {
        return _deleteItem.apply(this, arguments);
      }

      return deleteItem;
    }()
  }]);
  return CartClass;
}();

var carritoController = new CartClass();
module.exports = carritoController;