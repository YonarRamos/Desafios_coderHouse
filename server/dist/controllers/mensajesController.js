"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MensajesController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mensajes = require("../models/mensajes");

var _Usuario = _interopRequireDefault(require("../models/usuarios/Usuario"));

var Mongoose = require('mongoose');

// import { EmailService } from "../services/email";
// import { GmailService } from "../services/gmail";
// import { SmsService } from "../services/twilio";
// import Config from "../utils/config";
// import { carritoController } from "./carritoController";
// import moment from "moment";
var MensajesClass = /*#__PURE__*/function () {
  function MensajesClass() {
    (0, _classCallCheck2["default"])(this, MensajesClass);
  }

  (0, _createClass2["default"])(MensajesClass, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, user_id, timestamp, mensajes;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, user_id = _req$body.user_id, timestamp = _req$body.timestamp;
                _context.prev = 1;

                if (!user_id) {
                  _context.next = 13;
                  break;
                }

                if (!timestamp) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return _mensajes.Mensajes.find({
                  user_id: user_id,
                  timestamp: {
                    $gte: new Date(timestamp)
                  }
                }).exec();

              case 6:
                mensajes = _context.sent;
                res.status(200).json(mensajes);
                _context.next = 11;
                break;

              case 10:
                res.status(404).json({
                  msg: 'Fecha incorrecta!!'
                });

              case 11:
                _context.next = 14;
                break;

              case 13:
                res.status(404).json({
                  msg: 'El usuario no existe'
                });

              case 14:
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                console.log('GET MSG_CONTROLLER ERROR', _context.t0);
                return _context.abrupt("return", _context.t0);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16]]);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body2, messages, user_id, data, user, newMsg;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body2 = req.body, messages = _req$body2.messages, user_id = _req$body2.user_id;
                data = {
                  messages: messages,
                  user_id: user_id
                };
                user = _Usuario["default"].findById(user_id);

                if (user) {
                  if (messages.length > 0) {
                    newMsg = new _mensajes.Mensajes(data);
                    newMsg.save( /*#__PURE__*/function () {
                      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(error) {
                        return _regenerator["default"].wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (error) {
                                  console.error(error);
                                } else {
                                  res.status(200).json({
                                    mensajes: newMsg
                                  });
                                }

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x5) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else {
                    res.status(400).json({
                      mensajes: []
                    });
                  }
                } else {
                  res.status(400).json({
                    mensaje: 'El usuario no existe'
                  });
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function add(_x3, _x4) {
        return _add.apply(this, arguments);
      }

      return add;
    }() // async update(id, user){
    // return await UsuarioModel.findByIdAndUpdate(id, user);
    // }
    // async delete(id) {
    // return await UsuarioModel.findByIdAndDelete(id);
    // }
    // async login(req, res) {
    //     console.log('Sesion ==== ', req.sessionID)
    //     const user = req.user.nombre;
    //     try {
    //         if(req.user){
    //                 res.json({ 
    //                     msg: 'Welcome to our store!!', 
    //                     session: {
    //                         session : req.session,
    //                         user: req.user
    //                     }
    //                 }
    //             );
    //         } else {
    //             res.json({
    //                 msg: 'Datos incorrectos'
    //             })
    //         }
    //     } catch (error) {
    //         console.error('LOGIN CONTROLLER ERROR:', error)
    //         return error;
    //     }
    // }

  }]);
  return MensajesClass;
}();

var MensajesController = new MensajesClass();
exports.MensajesController = MensajesController;