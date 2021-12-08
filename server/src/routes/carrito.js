import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { graphqlSchema, graphqlRoot } from '../services/graphql';

const router = express.Router();

router.use('/', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlRoot,
    graphiql: true,//levanta como una interfaz grafica para trabajar con graphql
  }));

export default router