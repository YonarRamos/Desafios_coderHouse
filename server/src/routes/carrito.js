import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { graphqlSchema, graphqlRoot } from '../services/graphql';
import carritoController from '../controllers/carritoController';

const router = express.Router();

router.get('/:usuario_id', carritoController.get)  ;

export default router