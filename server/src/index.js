import express from 'express';
const cors = require('cors');
require('dotenv').config()
import router from './routes/index.js';
import session from "express-session";
import path from 'path';
import * as http from 'http';
import ws from "./services/ws";
import dbService from "./services/db";
import MongoStore from 'connect-mongo';
const mongoUrl = `mongodb+srv://root:root@cluster0.9xjxp.mongodb.net/ecommerce?retryWrites=true&w=majority`;
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
import passport from './middleware/auth';

const app = express();
app.use(cors());

const myServer = http.Server(app);
const puerto = 8080;
const publicPath = path.resolve(__dirname, '../public');


dbService.init();

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: mongoUrl,
    mongoOptions: advancedOptions,
  }),
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false ,
  rolling: true,
  expires: 60000,
  cookie: {
      maxAge: 60000
  },
};

app.use(session(StoreOptions));
//Inicializamos passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

//inicializamos socket
const socket = new ws(myServer);
socket.connection();

myServer.listen(puerto, () => console.log('Server up en puerto', process.env.PORT || puerto));

app.use('/', router);




