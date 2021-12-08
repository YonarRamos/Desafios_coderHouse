"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _graphql = require("../services/graphql");

var router = _express["default"].Router();

router.use('/', (0, _expressGraphql.graphqlHTTP)({
  schema: _graphql.graphqlSchema,
  rootValue: _graphql.graphqlRoot,
  graphiql: true //levanta como una interfaz grafica para trabajar con graphql

}));
var _default = router;
exports["default"] = _default;