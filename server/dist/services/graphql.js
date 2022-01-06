// import { buildSchema } from 'graphql';
// const { carritoController } = require('../controllers/carritoController');
// const getCarrito = carritoController.get;
// const addItem = carritoController.add;
// // GraphQL schema
// //https://graphql.org/graphql-js/basic-types/
// export const graphqlSchema = buildSchema(`
//     type Producto {
//       producto_id: String
//       cantidad: Int
//       _id: ID
//     },
//     type Carrito {
//         _id: ID,
//         usuario: String
//         productos: [Producto]
//     },
//     type Query {
//       get(usuario_id: String): Carrito
//     },
//     input Nuevo_producto {
//       producto_id: String
//       cantidad: Int
//     },
//     type Mutation {
//       add(usuario_id: String, producto: Nuevo_producto) : Carrito
//     }
// `);
// // Root resolver
// export const graphqlRoot = {
//   get : getCarrito,
//   add : addItem
// };
"use strict";