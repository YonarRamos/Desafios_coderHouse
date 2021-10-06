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
        var _req$body, email, password, nombre, apellido, edad, alias, avatar, user, newUser;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, password = _req$body.password, nombre = _req$body.nombre, apellido = _req$body.apellido, edad = _req$body.edad, alias = _req$body.alias, avatar = _req$body.avatar;

                if (!(email && password && nombre && apellido && edad && alias && avatar)) {
                  _context2.next = 7;
                  break;
                }

                user = {
                  email: email,
                  password: password,
                  nombre: nombre,
                  apellido: apellido,
                  edad: edad,
                  alias: alias,
                  avatar: avatar
                };
                newUser = new _usuarios.Usuario(user);
                newUser.save(function (error) {
                  if (error) {
                    console.error(error);
                    return handleError(err);
                  }

                  return res.status(200).json({
                    usuario: newUser
                  });
                });
                _context2.next = 8;
                break;

              case 7:
                return _context2.abrupt("return", res.status(400).json({
                  msg: 'Todos los campos son obligatorios'
                }));

              case 8:
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
        var _req$body2, email, password, user;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
                _context5.prev = 1;

                if (!(email && password)) {
                  _context5.next = 18;
                  break;
                }

                _context5.next = 5;
                return _usuarios.Usuario.findOne({
                  email: email
                });

              case 5:
                user = _context5.sent;

                if (!user) {
                  _context5.next = 15;
                  break;
                }

                if (!(user.password == password)) {
                  _context5.next = 12;
                  break;
                }

                req.session.loggedIn = true;
                res.status(200).json({
                  user: user,
                  session: req.session
                });
                _context5.next = 13;
                break;

              case 12:
                return _context5.abrupt("return", res.status(400).json({
                  msg: 'Contraseña incorrecta'
                }));

              case 13:
                _context5.next = 16;
                break;

              case 15:
                return _context5.abrupt("return", res.status(404).json({
                  msg: 'Usuario no registrado'
                }));

              case 16:
                _context5.next = 19;
                break;

              case 18:
                return _context5.abrupt("return", res.status(400).json({
                  msg: 'Todos los campos son obligatorios'
                }));

              case 19:
                _context5.next = 25;
                break;

              case 21:
                _context5.prev = 21;
                _context5.t0 = _context5["catch"](1);
                console.error('LOGIN CONTROLLER ERROR:', _context5.t0);
                return _context5.abrupt("return", _context5.t0);

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 21]]);
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