"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mensajesController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../services/db");

var _mensajes = _interopRequireDefault(require("../models/mensajes"));

var tableName = 'productos';

var Mensajes = /*#__PURE__*/function () {
  function Mensajes() {
    (0, _classCallCheck2["default"])(this, Mensajes);
  }

  (0, _createClass2["default"])(Mensajes, [{
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
                return _mensajes["default"].find();

              case 3:
                items = _context.sent;
                console.log(items);

                if (!(items.length == 0)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  msg: 'No hay mensajes.'
                }));

              case 9:
                res.json({
                  data: items
                });

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.error('Listar Error:', _context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      function listar(_x, _x2) {
        return _listar.apply(this, arguments);
      }

      return listar;
    }()
    /*   async listarById(req, res) {
        const { id } = req.params;
        const item = await productos.find({_id : id});
    
        if (item.length == 0) {
          return res.status(404).json({
            msg: 'Producto no encontrado',
          });      
        }else{
          res.json({
            data: item,
          });
        }
      } */

  }, {
    key: "agregar",
    value: function () {
      var _agregar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, user, msg, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, user = _req$body.user, msg = _req$body.msg;

                if (!(!user || !msg)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  msg: 'missing Body fields'
                }));

              case 3:
                data = {
                  user: user,
                  msg: msg
                };
                _context2.next = 6;
                return _mensajes["default"].insertMany([data]).then(function (mensaje) {
                  res.json({
                    data: mensaje
                  });
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function agregar(_x3, _x4) {
        return _agregar.apply(this, arguments);
      }

      return agregar;
    }()
    /*   async actualizar(req, res) {
        const { id } = req.params;
        const { name, description, stock, price, thumbnail } = req.body;
        
        if ( !name ||  !description || !stock || !price || !thumbnail ){
          return res.status(400).json({
            msg: 'missing Body fields',
          });     
        }
          const data = {
            name,
            description,
            stock,
            price,
            thumbnail,
          };
          console.log('update', data)
        await productos.findOneAndUpdate({_id : id}, data, { new: true }).then((producto) => {
          res.json({
            msg: 'Producto Actualizado',
            producto,
          });      
        })
      }
    
      async borrar(req, res) {
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
        
    
    
    
      }*/

  }]);
  return Mensajes;
}();

var mensajesController = new Mensajes();
exports.mensajesController = mensajesController;