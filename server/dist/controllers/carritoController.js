"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _carrito = require("../models/carrito.js");

var Mongoose = require('mongoose');

var CartClass = /*#__PURE__*/function () {
  function CartClass() {
    (0, _classCallCheck2["default"])(this, CartClass);
  }

  (0, _createClass2["default"])(CartClass, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(usuario_id) {
        var resCarrito;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('usuario_id', usuario_id.usuario_id);
                _context.next = 3;
                return _carrito.Carrito.findOne({
                  usuario: Mongoose.Types.ObjectId(usuario_id.usuario_id)
                });

              case 3:
                resCarrito = _context.sent;
                console.log('USUARIOOO', resCarrito);

                if (resCarrito) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", {
                  msg: 'Carrito no existe'
                });

              case 9:
                return _context.abrupt("return", resCarrito);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(usuario) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (usuario) {
                  _context2.next = 3;
                  break;
                }

                console.log('El usurio no existe');
                throw new Error('El usurio no existe');

              case 3:
                ;
                _context2.next = 6;
                return _carrito.Carrito.create({
                  usuario: usuario,
                  productos: []
                }).then(function () {
                  console.log('Se creo un nuevo carrito!!');
                })["catch"](function (error) {
                  throw new Error('ERROR_CREANDO_CARRITO', error);
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /*   async add( usuario_id, producto) {
        //const { usuario, productos } = req.body;
        const resCarrito = await Carrito.findOne({usuario_id:usuario_id});
    
        if (!resCarrito) {
          return {
            msg: 'Carrito no existe',
          };      
        }else{
          let index = resCarrito.productos.findIndex((element) => element.producto_id > producto.producto_id)
          if(index == -1){
            resCarrito.productos.push(producto);
            await resCarrito.save().then((res)=>{
              return res;
            });
          } else{
            resCarrito[index].cantidad = producto.cantidad;
            await resCarrito.save().then((res)=>{
              return res;
            });
          }
        }
    
      } */

  }]);
  return CartClass;
}();

var carritoController = new CartClass();
module.exports = {
  carritoController: carritoController
};