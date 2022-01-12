"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var usuariosCollection = 'usuarios';
var usuarioSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: false
  },
  password: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  alias: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  }
});
usuarioSchema.pre('save', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(next) {
    var user, hash;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = this;
            _context.next = 3;
            return bcrypt.hash(user.password, 10);

          case 3:
            hash = _context.sent;
            this.password = hash;
            next();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

usuarioSchema.methods.isValidPassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(password) {
    var user, compare;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user = this;
            _context2.next = 3;
            return bcrypt.compare(password, user.password);

          case 3:
            compare = _context2.sent;
            return _context2.abrupt("return", compare);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = Mongoose.models.usuarios || Mongoose.model(usuariosCollection, usuarioSchema);