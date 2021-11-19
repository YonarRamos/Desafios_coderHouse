const { SchemaComposer } = require('graphql-compose');
const { productoTC, productoMutation } = require('../controllers/productosControllerGQL');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...productoTC,
});

schemaComposer.Mutation.addFields({
  ...productoMutation,
});

export const graphQLMainSchema = schemaComposer.buildSchema();