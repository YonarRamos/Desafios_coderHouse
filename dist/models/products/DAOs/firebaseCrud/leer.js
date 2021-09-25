"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readSpecificUser = exports.readAllUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("../services/db");

var readAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var resultado, docs, output;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db.UserDB.get();

          case 2:
            resultado = _context.sent;
            docs = resultado.docs;
            output = docs.map(function (aDoc) {
              return {
                id: aDoc.id,
                data: aDoc.data()
              };
            });
            return _context.abrupt("return", output);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

exports.readAllUsers = readAllUsers;

var readSpecificUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _db.UserDB.doc(id).get();

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", {
              id: result.id,
              data: result.data()
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function readSpecificUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.readSpecificUser = readSpecificUser;