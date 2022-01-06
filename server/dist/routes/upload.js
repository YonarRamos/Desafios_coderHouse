"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var upload = require("../middleware/upload");

var express = require("express");

var router = express.Router();
router.post("/upload", upload.single("thumbnail"), /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var imgUrl;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.file === undefined)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.send("you must select a file."));

          case 2:
            imgUrl = "http://localhost:8080/file/".concat(req.file.filename);
            return _context.abrupt("return", res.send(imgUrl));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;