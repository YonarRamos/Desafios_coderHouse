"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Config = require('../utils/config');

var twilio = require('twilio');

var Twilio = /*#__PURE__*/function () {
  function Twilio() {
    (0, _classCallCheck2["default"])(this, Twilio);
    this.twilio = twilio(Config.TWILIO_ACCOUNT_ID, Config.TWILIO_TOKEN);
  }

  (0, _createClass2["default"])(Twilio, [{
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cellphoneNumber, message) {
        var params, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  body: message,
                  from: Config.TWILIO_CELLPHONE,
                  to: cellphoneNumber
                };
                _context.next = 3;
                return this.twilio.messages.create(params);

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendMessage(_x, _x2) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }]);
  return Twilio;
}();

var SmsService = new Twilio();
module.exports = SmsService;