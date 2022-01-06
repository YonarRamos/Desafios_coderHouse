"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isLoggedIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _mongo = require("../models/usuarios/DAOs/mongo");

var Mongoose = require('mongoose');

var UsuarioModel = Mongoose.model('usuarios', _mongo.usuarioSchema);
var LocalStrategy = _passportLocal["default"].Strategy;
var strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
};

var loginFunc = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, email, password, done) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Validando usuario:', email, '==>', password, '==>', UsuarioModel);
            _context.prev = 1;
            _context.next = 4;
            return UsuarioModel.findOne({
              email: email
            });

          case 4:
            user = _context.sent;
            console.log(user);

            if (user) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", done(null, false, {
              msg: 'User does not exist'
            }));

          case 8:
            if (user.isValidPassword(password)) {
              _context.next = 11;
              break;
            }

            console.log('Password is not valid.');
            return _context.abrupt("return", done(null, false, {
              msg: 'Password is not valid.'
            }));

          case 11:
            console.log('SALIO TODO BIEN');
            return _context.abrupt("return", done(null, user));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](1);
            console.log('LoginFuncERROR:', _context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 15]]);
  }));

  return function loginFunc(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var signUpFunc = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, email, password, done) {
    var _req$body, _email, _password, nombre, apellido, edad, alias, avatar, query, user, _userData, userData, newUser;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, _email = _req$body.email, _password = _req$body.password, nombre = _req$body.nombre, apellido = _req$body.apellido, edad = _req$body.edad, alias = _req$body.alias, avatar = _req$body.avatar;
            console.log(req.body);

            if (!(!_email || !_password || !nombre || !apellido || edad || alias || avatar)) {
              _context2.next = 6;
              break;
            }

            console.log('Invalid body fields');
            return _context2.abrupt("return", done(null, false));

          case 6:
            query = {
              $or: [{
                email: _email
              }, {
                email: _email
              }]
            };
            console.log(query);
            _context2.next = 10;
            return UsuarioModel.findOne(query);

          case 10:
            user = _context2.sent;

            if (!user) {
              _context2.next = 17;
              break;
            }

            console.log('User already exists');
            console.log(user);
            return _context2.abrupt("return", done(null, false, 'User already exists'));

          case 17:
            userData = (_userData = {
              email: _email,
              password: _password
            }, (0, _defineProperty2["default"])(_userData, "email", _email), (0, _defineProperty2["default"])(_userData, "firstName", firstName), (0, _defineProperty2["default"])(_userData, "lastName", lastName), _userData);
            newUser = new UsuarioModel(userData);
            _context2.next = 21;
            return newUser.save();

          case 21:
            return _context2.abrupt("return", done(null, newUser));

          case 22:
            _context2.next = 27;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](0);
            done(_context2.t0);

          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 24]]);
  }));

  return function signUpFunc(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

_passport["default"].use('login', new LocalStrategy(strategyOptions, loginFunc));

_passport["default"].use('signup', new LocalStrategy(strategyOptions, signUpFunc));

_passport["default"].serializeUser(function (user, done) {
  done(null, user._id);
});

_passport["default"].deserializeUser(function (userId, done) {
  Usuario.findById(userId, function (err, user) {
    done(err, user);
  });
});

var isLoggedIn = function isLoggedIn(req, res, done) {
  if (!req.user) return res.status(401).json({
    msg: 'No estas autorizado!!'
  });
  done();
};

exports.isLoggedIn = isLoggedIn;
var _default = _passport["default"];
exports["default"] = _default;