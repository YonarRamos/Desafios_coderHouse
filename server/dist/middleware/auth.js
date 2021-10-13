"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isLoggedIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _usuarios = require("../models/usuarios");

var _passportFacebook = require("passport-facebook");

var FACEBOOK_APP_ID = '431388045021088';
var FACEBOOK_APP_SECRET = '59edba20e61d518200b614d3ad28fbf3';
var strategyOptions = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:8080/usuarios/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails']
};

var loginFunc = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(accessToken, refreshToken, profile, done) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('SALIO TODO BIEN');
            /*   console.log(accessToken);
              console.log(refreshToken); */

            user = profile; //console.log(user);

            return _context.abrupt("return", done(null, user));

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function loginFunc(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

_passport["default"].use(new _passportFacebook.Strategy(strategyOptions, loginFunc));

_passport["default"].serializeUser(function (user, cb) {
  cb(null, user);
});

_passport["default"].deserializeUser(function (obj, cb) {
  cb(null, obj);
});

var isLoggedIn = function isLoggedIn(req, res, done) {
  if (!req.isAuthenticated()) return res.status(401).json({
    msg: 'Unathorized'
  });
  done();
};

exports.isLoggedIn = isLoggedIn;
var _default = _passport["default"];
exports["default"] = _default;