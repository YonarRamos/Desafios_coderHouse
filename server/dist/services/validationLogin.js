"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLogIn = void 0;

var _expressSession = _interopRequireDefault(require("express-session"));

var validateLogIn = function validateLogIn(req, res, next) {
  if (req.session.loggedIn) next();else res.status(401).json({
    msg: 'no estas autorizado'
  });
};

exports.validateLogIn = validateLogIn;