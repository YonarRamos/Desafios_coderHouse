"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require('../../apis/usuarios'),
    UsersAPI = _require.UsersAPI;

var Users = /*#__PURE__*/function () {
  function Users() {
    (0, _classCallCheck2["default"])(this, Users);
  }

  (0, _createClass2["default"])(Users, [{
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return UsersAPI.getUsers(req, res);

              case 2:
                result = _context.sent;
                return _context.abrupt("return", res.json(result));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUsers(_x, _x2) {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
  }, {
    key: "addUsers",
    value: function () {
      var _addUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newItem;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return UsersAPI.addUsers(req, res);

              case 2:
                newItem = _context2.sent;
                return _context2.abrupt("return", res.json(newItem));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addUsers(_x3, _x4) {
        return _addUsers.apply(this, arguments);
      }

      return addUsers;
    }()
  }, {
    key: "updateUsers",
    value: function () {
      var _updateUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var updatedItem;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return UsersAPI.updateUser(req, res);

              case 2:
                updatedItem = _context3.sent;
                return _context3.abrupt("return", res.json(updatedItem));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateUsers(_x5, _x6) {
        return _updateUsers.apply(this, arguments);
      }

      return updateUsers;
    }()
  }, {
    key: "deleteUsers",
    value: function () {
      var _deleteUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var deletedItem;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return UsersAPI.deleteUser(req, res);

              case 2:
                deletedItem = _context4.sent;
                res.json(deletedItem);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteUsers(_x7, _x8) {
        return _deleteUsers.apply(this, arguments);
      }

      return deleteUsers;
    }()
  }, {
    key: "loginUsers",
    value: function () {
      var _loginUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var loggedUser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return UsersAPI.loginUsers(req, res);

              case 2:
                loggedUser = _context5.sent;
                res.json(loggedUser);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function loginUsers(_x9, _x10) {
        return _loginUsers.apply(this, arguments);
      }

      return loginUsers;
    }()
  }]);
  return Users;
}();

var usuariosController = new Users();
module.exports = {
  usuariosController: usuariosController
};