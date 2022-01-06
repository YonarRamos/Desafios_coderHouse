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
import mainRouter  from '../routes/index';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(compression());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Entrega Proyecto Final Yonar Ramos',
      version: '1.0.0',
      description:
        'This is a required app to get development certification from CoderHouse',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Yonar Ramos',
        url: 'www.yonarramos.info',
        email: 'yonar1687@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Development server',
      },
    ],
  },
  apis: ['src/routes/*'],
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export const myServer = http.Server(app);
const publicPath = path.resolve(__dirname, '../public');

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
app.use('/', mainRouter );

//inicializamos socket
const socket = new ws(myServer);
socket.connection();
const HTTPServer = http.createServer(app);
//inicializamos bd mongo
dbService.init();

export default HTTPServer;

