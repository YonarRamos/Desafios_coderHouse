"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carritoController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _carrito = require("../models/carrito.js");

var _usuarios = require("../models/usuarios");

var CartClass = /*#__PURE__*/function () {
  function CartClass() {
    (0, _classCallCheck2["default"])(this, CartClass);
  }

  (0, _createClass2["default"])(CartClass, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var usuario_id, resCarrito;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                usuario_id = req.params.usuario_id;
                _context.next = 3;
                return _carrito.Carrito.findOne({
                  usuario_id: usuario_id
                });

              case 3:
                resCarrito = _context.sent;

                if (resCarrito) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  msg: 'Carrito no existe'
                }));

              case 8:
                res.json(resCarrito);

              case 9:
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
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, usuario_id) {
        var user, data, newCart;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                user = _usuarios.Usuario.findById({
                  _id: usuario_id
                });

                if (user) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  msg: 'El usuario no existe'
                }));

              case 3:
                ;
                data = {
                  usuario_id: usuario_id,
                  productos: []
                };
                newCart = new _carrito.Carrito(data);
                newCart.save( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(error) {
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (error) {
                              console.error('ERROR_CARRITO_CONTRIOLLER:', error);
                            } else {
                              console.log('Se creo un nuevo carrito!!');
                            }

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x6) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function add(_x3, _x4, _x5) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "apdate",
    value: function () {
      var _apdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var _req$body, usuario_id, productos, data;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body = req.body, usuario_id = _req$body.usuario_id, productos = _req$body.productos;

                if (!(!usuario_id || !productos)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: 'missing Body fields'
                }));

              case 3:
                data = {
                  usuario_id: usuario_id,
                  productos: productos
                };
                console.log('update', data);
                _context4.next = 7;
                return _carrito.Carrito.findOneAndUpdate({
                  usuario_id: usuario_id
                }, data, {
                  "new": true
                }).then(function (producto) {
                  res.json({
                    msg: 'Carrito Actualizado',
                    producto: producto
                  });
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function apdate(_x7, _x8) {
        return _apdate.apply(this, arguments);
      }

      return apdate;
    }()
    /*   async borrar(req, res) {
        try {
          const { id } = req.params;   
          await productos.remove({_id : id}).then((producto)=>{
              res.json({ 
              msg: 'Producto eliminado',
              data: producto
            });
          });
    
    
        } catch (error) {
          res.json({
            msg: 'Error al eliminar producto',
          });      
        }
        
    
    
    
      } */

  }]);
  return CartClass;
}();

var carritoController = new CartClass();
exports.carritoController = carritoController;