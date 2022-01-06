"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var CarritoModel = require('../models/carrito');

var Mongoose = require('mongoose');

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
                console.log('usuario_id', usuario_id);
                _context.next = 4;
                return CarritoModel.findOne({
                  usuario: Mongoose.Types.ObjectId(usuario_id)
                });

              case 4:
                resCarrito = _context.sent;
                console.log('USUARIOOO', resCarrito);

                if (!resCarrito) {
                  res.status(404).json({
                    msg: 'El carrito no existe'
                  });
                } else {
                  res.status(200).json({
                    data: resCarrito
                  });
                }

              case 7:
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
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function create(_x3) {
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
module.exports = carritoController;