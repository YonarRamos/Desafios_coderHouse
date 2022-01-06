"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _graphql = require("../services/graphql");

var _carritoController = _interopRequireDefault(require("../controllers/carritoController"));

var router = _express["default"].Router();

router.get('/:usuario_id', _carritoController["default"].get);
var _default = router;
exports["default"] = _default;