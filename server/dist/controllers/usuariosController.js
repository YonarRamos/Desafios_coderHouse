"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuariosController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _usuarios = require("../models/usuarios");

var _email = require("../services/email");

var _gmail = require("../services/gmail");

var _twilio = require("../services/twilio");

var _config = _interopRequireDefault(require("../utils/config"));

var _moment = _interopRequireDefault(require("moment"));

var UsuariosClass = /*#__PURE__*/function () {
  function UsuariosClass() {
    (0, _classCallCheck2["default"])(this, UsuariosClass);
  }

  (0, _createClass2["default"])(UsuariosClass, [{
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
                return _usuarios.Usuario.find({
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
                return _usuarios.Usuario.find();

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
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, email, password, nombre, apellido, edad, alias, avatar, telefono, user, newUser;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
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
                newUser = new _usuarios.Usuario(user);
                newUser.save(function (error) {
                  if (error) {
                    console.error(error);
                  }

                  return res.status(200).json({
                    usuario: newUser
                  });
                });

              case 5:
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
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, user) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _usuarios.Usuario.findByIdAndUpdate(id, user);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
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
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _usuarios.Usuario.findByIdAndDelete(id);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x7) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var user, destination, subject, content, Gdestination, Gsubject, Gcontent, resGmail, resTwilio;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log('Sesion ==== ', req.session);
                user = req.user.nombre;
                _context5.prev = 2;

                if (!req.user) {
                  _context5.next = 26;
                  break;
                }

                res.json({
                  msg: 'Welcome to our store!!',
                  session: req.session
                }); //Notificando al Admin

                console.log('Sending email to Admin...');
                destination = 'americo.dicki24@ethereal.email';
                subject = "Login - ".concat(user, " - ").concat((0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
                content = " <h1> ".concat(user, " acaba de iniciar sesi\xF3n</h1> ");
                _context5.next = 11;
                return _email.EmailService.sendEmail(destination, subject, content);

              case 11:
                console.log('Sending Gmail...');
                Gdestination = 'ingyonarramos@gmail.com';
                Gsubject = "Login - ".concat(user, " - ").concat((0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
                Gcontent = " <h1> ".concat(user, " acaba de iniciar sesi\xF3n</h1> ");
                _context5.next = 17;
                return _gmail.GmailService.sendEmail(Gdestination, Gsubject, Gcontent);

              case 17:
                resGmail = _context5.sent;
                console.log('Gmail status:', resGmail);
                console.log('Sending msg to Admin...');
                _context5.next = 22;
                return _twilio.SmsService.sendMessage('+541138796141', "".concat(user, " acaba de iniciar sesi\xF3n"));

              case 22:
                resTwilio = _context5.sent;
                console.log('Msg status:', resTwilio);
                _context5.next = 27;
                break;

              case 26:
                res.json({
                  msg: 'Algo salió mal'
                });

              case 27:
                _context5.next = 33;
                break;

              case 29:
                _context5.prev = 29;
                _context5.t0 = _context5["catch"](2);
                console.error('LOGIN CONTROLLER ERROR:', _context5.t0);
                return _context5.abrupt("return", _context5.t0);

              case 33:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 29]]);
      }));

      function login(_x8, _x9) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return UsuariosClass;
}();

var usuariosController = new UsuariosClass();
exports.usuariosController = usuariosController;