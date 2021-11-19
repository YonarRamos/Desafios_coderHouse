"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoMutation = exports.productoTC = void 0;

var _productosGQL = require("../models/productosGQL");

var productoTC = {
  productoById: _productosGQL.productosTC.getResolver('findById'),
  productoByIds: _productosGQL.productosTC.getResolver('findByIds'),
  productoOne: _productosGQL.productosTC.getResolver('findOne'),
  productoMany: _productosGQL.productosTC.getResolver('findMany'),
  productoCount: _productosGQL.productosTC.getResolver('count'),
  productoConnection: _productosGQL.productosTC.getResolver('connection'),
  productoPagination: _productosGQL.productosTC.getResolver('pagination')
};
exports.productoTC = productoTC;
var productoMutation = {
  productoCreateOne: _productosGQL.productosTC.getResolver('createOne'),
  productoCreateMany: _productosGQL.productosTC.getResolver('createMany'),
  productoUpdateById: _productosGQL.productosTC.getResolver('updateById'),
  productoUpdateOne: _productosGQL.productosTC.getResolver('updateOne'),
  productoUpdateMany: _productosGQL.productosTC.getResolver('updateMany'),
  productoRemoveById: _productosGQL.productosTC.getResolver('removeById'),
  productoRemoveOne: _productosGQL.productosTC.getResolver('removeOne'),
  productoRemoveMany: _productosGQL.productosTC.getResolver('removeMany')
};
exports.productoMutation = productoMutation;