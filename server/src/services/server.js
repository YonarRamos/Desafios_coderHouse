import express from 'express';
import compression from 'compression';
const cors = require('cors');
require('dotenv').config()
import session from "express-session";
import cookieParser from 'cookie-parser';
import path from 'path';
import * as http from 'http';
import ws from "../services/ws";
import dbService from "../services/db";
import MongoStore from 'connect-mongo';
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
import passport from '../middleware/auth';
import router from '../routes/index';
import { graphqlHTTP } from 'express-graphql';
import { graphQLMainSchema } from './graphql';

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(compression());

//Graphql GET y POST productos
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: graphQLMainSchema,
//     graphiql: true,//levanta como una interfaz grafica para trabajar con graphql
//   })
// );

export const myServer = http.Server(app);
const publicPath = path.resolve(__dirname, '../public');
dbService.init();

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: dbService.srv,
    mongoOptions: advancedOptions,
  }),
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false ,
/*   cookie: {
      maxAge: 600000
  }, */
};

app.use(cookieParser());
app.use(session(StoreOptions));

//Inicializamos passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use('/', router);

//inicializamos socket
const socket = new ws(myServer);
socket.connection();
const HTTPServer = http.createServer(app);
//inicializamos bd mongo
dbService.init();

export default HTTPServer;

