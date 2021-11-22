"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _config = _interopRequireDefault(require("../utils/config"));

var Mongoose = require('mongoose');

var db = 'ecommerce';

require('dotenv').config();

var DbServiceClass = /*#__PURE__*/function () {
  function DbServiceClass() {
    (0, _classCallCheck2["default"])(this, DbServiceClass);

    if (false) {
      this.srv = "mongodb://localhost:27017/".concat(db);
    } else {
      this.srv = "mongodb+srv://".concat(_config["default"].MONGO_ATLAS_USER, ":").concat(_config["default"].MONGO_ATLAS_PASSWORD, "@").concat(_config["default"].MONGO_ATLAS_CLUSTER, ".9xjxp.mongodb.net/").concat(_config["default"].MONGO_LOCAL_DBNAME, "?retryWrites=true&w=majority");
      console.log('MONGO ATLAS', this.srv);
    }
  }

  (0, _createClass2["default"])(DbServiceClass, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Mongoose.connect(this.srv).then(function (res) {
                  return console.log('MONGO CONNECTED!!');
                })["catch"](function (error) {
                  return console.log('MONGOOSE_ERROR:', error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Mongoose.disconnect(this.srv).then(function (res) {
                  return console.log('MONGO DISCONNECTED!!');
                })["catch"](function (error) {
                  return console.log('MONGOOSE_DIS_ERROR:', error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function disconnect() {
        return _disconnect.apply(this, arguments);
      }

      return disconnect;
    }()
  }]);
  return DbServiceClass;
}();

module.exports = new DbServiceClass();