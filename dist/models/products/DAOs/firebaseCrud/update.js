"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("../services/db");

var _leer = require("./leer");

var updateUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, data) {
    var miDoc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            miDoc = _db.UserDB.doc(id);
            console.log(miDoc); //Chequear si existe sino no seguir.

            _context.next = 4;
            return _db.UserDB.doc(id).update(data);

          case 4:
            console.log('salio bien');
            return _context.abrupt("return", (0, _leer.readSpecificUser)(id));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;