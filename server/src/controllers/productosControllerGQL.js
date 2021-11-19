import { productosTC } from '../models/productosGQL';

export const productoTC = {
  productoById: productosTC.getResolver('findById'),
  productoByIds: productosTC.getResolver('findByIds'),
  productoOne: productosTC.getResolver('findOne'),
  productoMany: productosTC.getResolver('findMany'),
  productoCount: productosTC.getResolver('count'),
  productoConnection: productosTC.getResolver('connection'),
  productoPagination: productosTC.getResolver('pagination'),
};

export const productoMutation = {
  productoCreateOne: productosTC.getResolver('createOne'),
  productoCreateMany: productosTC.getResolver('createMany'),
  productoUpdateById: productosTC.getResolver('updateById'),
  productoUpdateOne: productosTC.getResolver('updateOne'),
  productoUpdateMany: productosTC.getResolver('updateMany'),
  productoRemoveById: productosTC.getResolver('removeById'),
  productoRemoveOne: productosTC.getResolver('removeOne'),
  productoRemoveMany: productosTC.getResolver('removeMany'),
};