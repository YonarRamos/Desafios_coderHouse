"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userValidator = void 0;

var _joi = _interopRequireDefault(require("joi"));

var userValidator = function userValidator(req, res, next) {
  // create schema object
  var schema = _joi["default"].object({
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().required(),
    confirmPassword: _joi["default"].string().valid(_joi["default"].ref('password')).required(),
    nombre: _joi["default"].string().required(),
    apellido: _joi["default"].string().required(),
    edad: _joi["default"].number().min(0).required(),
    alias: _joi["default"].string().required(),
    avatar: _joi["default"].string().required(),
    telefono: _joi["default"].string().length(10).pattern(/^[0-9]+$/).required()
  }); // schema options


  var options = {
    abortEarly: false,
    // include all errors
    allowUnknown: true,
    // ignore unknown props
    stripUnknown: true // remove unknown props

  }; // validate request body against schema

  var _schema$validate = schema.validate(req.body, options),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (error) {
    // on fail return comma separated errors
    res.status(400).json({
      error: error
    }); //next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
  } else {
    // on success replace req.body with validated value and trigger next middleware function
    req.body = value;
    next();
  }
};

exports.userValidator = userValidator;