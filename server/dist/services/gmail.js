"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Config = require('../utils/config');

var nodemailer = require('nodemailer');

var path = require('path');

var Email = /*#__PURE__*/function () {
  function Email() {
    (0, _classCallCheck2["default"])(this, Email);
    this.owner = {
      name: Config.GMAIL_NAME,
      address: Config.GMAIL_EMAIL
    };
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: Config.GMAIL_EMAIL,
        pass: Config.GMAIL_PASSWORD
      }
    });
    this.transporter.verify().then(function () {
      return console.log('READY To Send Gmail');
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
                  html: content,
                  attachments: [{
                    // filename and content type is derived from path
                    path: path.join(__dirname, '../../public/nodemailer.png')
                  }]
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

var GmailService = new Email();
module.exports = GmailService;