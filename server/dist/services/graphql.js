"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphqlRoot = exports.graphqlSchema = void 0;

var _graphql = require("graphql");

var _require = require('../controllers/carritoController'),
    carritoController = _require.carritoController;

var getCarrito = carritoController.get;
var addItem = carritoController.add; // GraphQL schema
//https://graphql.org/graphql-js/basic-types/

var graphqlSchema = (0, _graphql.buildSchema)("\n    type Producto {\n      producto_id: String\n      cantidad: Int\n      _id: ID\n    },\n\n    type Carrito {\n        _id: ID,\n        usuario: String\n        productos: [Producto]\n    },\n\n    type Query {\n      get(usuario_id: String): Carrito\n    },\n\n    input Nuevo_producto {\n      producto_id: String\n      cantidad: Int\n    },\n\n    type Mutation {\n      add(usuario_id: String, producto: Nuevo_producto) : Carrito\n    }\n"); // Root resolver

exports.graphqlSchema = graphqlSchema;
var graphqlRoot = {
  get: getCarrito,
  add: addItem
};
exports.graphqlRoot = graphqlRoot;