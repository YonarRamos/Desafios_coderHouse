"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Mongoose = require('mongoose');

var db = 'ecommerce';

require('dotenv').config();

var DbServiceClass = /*#__PURE__*/function () {
  function DbServiceClass() {
    (0, _classCallCheck2["default"])(this, DbServiceClass);

    if (false) {
      this.srv = "mongodb://localhost:27017/".concat(db);
    } else {
      this.srv = "mongodb://".concat(process.env.MONGO_ATLAS_USER, ":").concat(process.env.MONGO_ATLAS_PASSWORD, "@").concat(process.env.MONGO_ATLAS_CLUSTER, ".9xjxp.mongodb.net/").concat(process.env.MONGO_ATLAS_DBNAME, "?retryWrites=true&w=majority");
      console.log('MONGO ATLAS', "".concat(process.env.MONGO_ATLAS_USER, ":").concat(process.env.MONGO_ATLAS_PASSWORD, "@").concat(process.env.MONGO_ATLAS_CLUSTER, ".9xjxp.mongodb.net/").concat(process.env.MONGO_ATLAS_DBNAME, "?retryWrites=true&w=majority"));
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
                return Mongoose.connect("mongodb+srv://root:root@cluster0.9xjxp.mongodb.net/ecommerce?retryWrites=true&w=majority").then(function (res) {
                  return console.log('MONGO CONNECTED ==>', res);
                })["catch"](function (error) {
                  return console.log('MONGOOSE_ERROR:', error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);
  return DbServiceClass;
}();

module.exports = new DbServiceClass();