"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _config = _interopRequireDefault(require("../utils/config"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var Email = /*#__PURE__*/function () {
  function Email() {
    (0, _classCallCheck2["default"])(this, Email);
    this.owner = {
      name: _config["default"].ETHEREAL_NAME,
      address: _config["default"].ETHEREAL_EMAIL
    };
    this.transporter = _nodemailer["default"].createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: _config["default"].ETHEREAL_EMAIL,
        pass: _config["default"].ETHEREAL_PASSWORD
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });
    this.transporter.verify().then(function () {
      return console.log('READY To Send Etheral email');
    });
  }

  (0, _createClass2["default"])(Email, [{
    key: "sendEmail",
    value: function () {
      var _sendEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dest, subject, content) {
        var mailOptions, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mailOptions = {
                  from: this.owner,
                  to: dest,
                  subject: subject,
                  html: content
                };
                _context.next = 3;
                return this.transporter.sendMail(mailOptions);

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

      function sendEmail(_x, _x2, _x3) {
        return _sendEmail.apply(this, arguments);
      }

      return sendEmail;
    }()
  }]);
  return Email;
}();

var EmailService = new Email();
exports.EmailService = EmailService;