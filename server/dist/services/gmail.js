"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GmailService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _config = _interopRequireDefault(require("../utils/config"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _path = _interopRequireWildcard(require("path"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Email = /*#__PURE__*/function () {
  function Email() {
    (0, _classCallCheck2["default"])(this, Email);
    this.owner = {
      name: _config["default"].GMAIL_NAME,
      address: _config["default"].GMAIL_EMAIL
    };
    this.transporter = _nodemailer["default"].createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: _config["default"].GMAIL_EMAIL,
        pass: _config["default"].GMAIL_PASSWORD
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
                    path: _path["default"].join(__dirname, '../../public/nodemailer.png')
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
exports.GmailService = GmailService;