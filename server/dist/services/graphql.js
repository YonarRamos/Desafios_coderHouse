"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphQLMainSchema = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _require = require('graphql-compose'),
    SchemaComposer = _require.SchemaComposer;

var _require2 = require('../controllers/productosControllerGQL'),
    productoTC = _require2.productoTC,
    productoMutation = _require2.productoMutation;

var schemaComposer = new SchemaComposer();
schemaComposer.Query.addFields(_objectSpread({}, productoTC));
schemaComposer.Mutation.addFields(_objectSpread({}, productoMutation));
var graphQLMainSchema = schemaComposer.buildSchema();
exports.graphQLMainSchema = graphQLMainSchema;