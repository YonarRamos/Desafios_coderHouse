"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

//import session from "express-session";
var Mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var EmailService = require("../../../services/email");

var GmailService = require("../../../services/gmail");

var SmsService = require("../../../services/twilio");

var _require = require("../../../controllers/carritoController"),
    carritoController = _require.carritoController;

var UsuarioModel = require('../Usuario');

var moment = require("moment");

var CombinedStream = require('combined-stream');

var UsuariosMongoDAO = /*#__PURE__*/function () {
  function UsuariosMongoDAO() {
    (0, _classCallCheck2["default"])(this, UsuariosMongoDAO);
  }

  (0, _createClass2["default"])(UsuariosMongoDAO, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var email, user, _user;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = req.body.email;
                _context.prev = 1;

                if (!email) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return UsuarioModel.find({
                  email: email
                });

              case 5:
                user = _context.sent;

                if (user) {
                  res.status(200).json({
                    user: user
                  });
                } else {
                  res.status(404).json({
                    msg: 'El usuario no existe'
                  });
                }

                _context.next = 13;
                break;

              case 9:
                _context.next = 11;
                return UsuarioModel.find();

              case 11:
                _user = _context.sent;

                if (_user) {
                  req.session.loggedIn = true;
                  res.status(200).json({
                    user: _user
                  });
                } else {
                  res.status(404).json({
                    msg: 'El usuario no existe'
                  });
                }

              case 13:
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                console.log('GET CONTROLLER ERROR', _context.t0);
                return _context.abrupt("return", _context.t0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var _req$body, email, password, nombre, apellido, edad, alias, avatar, telefono, user, newUser;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, password = _req$body.password, nombre = _req$body.nombre, apellido = _req$body.apellido, edad = _req$body.edad, alias = _req$body.alias, avatar = _req$body.avatar, telefono = _req$body.telefono;
                telefono = "+549".concat(telefono);
                user = {
                  email: email,
                  password: password,
                  nombre: nombre,
                  apellido: apellido,
                  edad: edad,
                  alias: alias,
                  avatar: avatar,
                  telefono: telefono
                };
                newUser = new UsuarioModel(user);
                _context4.next = 6;
                return newUser.save().then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
                    var usuario;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!user) {
                              _context3.next = 6;
                              break;
                            }

                            usuario = user._id;
                            console.log('Creando carrito del usuario...', user._id, ':', user.nombre);
                            _context3.next = 5;
                            return carritoController.create(usuario).then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                              var destination, subject, content, resEtheral, Gdestination, Gsubject, Gcontent, resGmail, resTwilio;
                              return _regenerator["default"].wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      //Notificando al Admin

                                      /* ETHERAL */
                                      console.log('Sending email to Admin...');
                                      destination = 'americo.dicki24@ethereal.email';
                                      subject = "Nuevo Registro - ".concat(user.nombre, " - ").concat(moment().format('YYYY-MM-DD HH:mm:ss'));
                                      content = " \n                    <h3> Nuevo registro</h3> \n                    <ul>\n                        <li>\n                            Nombre: ".concat(user.nombre, "\n                        </li>\n                        <li>\n                            Apellido: ").concat(user.apellido, "\n                        </li>\n                        <li>\n                            Tel\xE9fono: ").concat(user.telefono, "\n                        </li>\n                        <li>\n                            Apellido: ").concat(user.apellido, "\n                        </li>\n                        <li>\n                            Edad: ").concat(user.edad, "\n                        </li>\n                        <li>\n                            Alias: ").concat(user.alias, "\n                        </li>\n                        <li>\n                            Email: ").concat(user.email, "\n                        </li>\n                    </ul>                   \n                    ");
                                      _context2.next = 6;
                                      return EmailService.sendEmail(destination, subject, content);

                                    case 6:
                                      resEtheral = _context2.sent;
                                      console.log('Email enviado!!');
                                      /* GMAIL */

                                      /* GMAIL */
                                      console.log('Sending Gmail...');
                                      Gdestination = 'ingyonarramos@gmail.com';
                                      Gsubject = "Nuevo Registro - ".concat(user.nombre, " - ").concat(moment().format('YYYY-MM-DD HH:mm:ss'));
                                      Gcontent = "\n                    <h3> Nuevo registro</h3> \n                    <ul>\n                        <li>\n                            Nombre: ".concat(user.nombre, "\n                        </li>\n                        <li>\n                            Apellido: ").concat(user.apellido, "\n                        </li>\n                        <li>\n                            Tel\xE9fono: ").concat(user.telefono, "\n                        </li>\n                        <li>\n                            Apellido: ").concat(user.apellido, "\n                        </li>\n                        <li>\n                            Edad: ").concat(user.edad, "\n                        </li>\n                        <li>\n                            Alias: ").concat(user.alias, "\n                        </li>\n                        <li>\n                            Email: ").concat(user.email, "\n                        </li>\n                    </ul>                    \n                    ");
                                      _context2.next = 14;
                                      return GmailService.sendEmail(Gdestination, Gsubject, Gcontent);

                                    case 14:
                                      resGmail = _context2.sent;
                                      console.log('Gmail enviado!!');
                                      /* TWILIO */

                                      /* TWILIO */
                                      console.log('Sending msg to Admin...');
                                      _context2.next = 19;
                                      return SmsService.sendMessage('+541138796141', "Nuevo Registro ".concat(user.nombre));

                                    case 19:
                                      resTwilio = _context2.sent;
                                      console.log('Msg twilio enviado!!');

                                    case 21:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2);
                            })));

                          case 5:
                            res.status(200).json({
                              usuario: user
                            });

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x5) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function add(_x3, _x4) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, user) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return UsuarioModel.findByIdAndUpdate(id, user);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function update(_x6, _x7) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return UsuarioModel.findByIdAndDelete(id);

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function _delete(_x8) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log('Sesion ==== ', req.sessionID);
                user = req.user.nombre;
                _context7.prev = 2;

                if (req.sessionID) {
                  res.json({
                    msg: 'Welcome to our store!!',
                    session: {
                      session: req.session,
                      user: req.user
                    }
                  });
                } else {
                  res.json({
                    msg: 'Datos incorrectos'
                  });
                }

                _context7.next = 10;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](2);
                console.error('LOGIN CONTROLLER ERROR:', _context7.t0);
                return _context7.abrupt("return", _context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[2, 6]]);
      }));

      function login(_x9, _x10) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return UsuariosMongoDAO;
}();

module.exports = UsuariosMongoDAO;