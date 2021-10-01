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

var _mensajes = _interopRequireDefault(require("../models/mensajes"));

var _faker = _interopRequireDefault(require("../services/faker"));

var _normalizr = require("normalizr");

var moment = require('moment');

var tableName = 'mensajes';
/* const author = new schema.Entity(  'author',   {},   { idAttribute: 'email' });
const msge = new schema.Entity(  'message',  {    author: author,  },  { idAttribute: 'timestamp' });
const msgesSchema = new schema.Array(msge); */

var author = new _normalizr.schema.Entity('author', {}, {
  idAttribute: 'email'
});
var msgesSchema = new _normalizr.schema.Entity('message', {
  author: author
}, {
  idAttribute: 'timestamp'
});

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
                return _mensajes["default"].get();

              case 3:
                items = _context.sent;

                if (!(items.length == 0)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  msg: 'No hay mensajes.'
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
                return _mensajes["default"].find({
                  _id: id
                });

              case 3:
                item = _context2.sent;

                if (!(item.length == 0)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  msg: 'mensaje no encontrado'
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
        var _req$body, author, message, data, normalizedData;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, author = _req$body.author, message = _req$body.message;

                if (!(!author || !message)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  msg: 'Missing body fields'
                }));

              case 3:
                message.timestamp = moment().format();
                data = {
                  author: author,
                  message: message
                };
                console.log(data);
                normalizedData = (0, _normalizr.normalize)(data, msgesSchema);
                _context3.next = 9;
                return _mensajes["default"].add(normalizedData).then(function () {
                  res.json({
                    mensajes: normalizedData
                  });
                });

              case 9:
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