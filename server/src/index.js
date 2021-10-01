import express from 'express';
const cors = require('cors');
import router from './routes/index.js';
import session from "express-session";
import path from 'path';
import * as http from 'http';
import ws from "./services/ws";
import dbService from "./services/db";

const app = express();
const myServer = http.Server(app);
const puerto = 8080;
const publicPath = path.resolve(__dirname, '../public');

app.use(cors());
app.use(
    session({
      secret: 'mySecretkey', // clave para firmar la cookie
      cookie: { maxAge: 60000 }, // Tiempo en el que expira
      saveUninitialized: true, // Que guarde la cookie asi este vacia
      resave: true, // Que la guarde asi el endpoint no la use
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
dbService.init();

//inicializamos socket
const socket = new ws(myServer);
socket.connection();

myServer.listen(puerto, () => console.log('Server up en puerto', process.env.PORT || puerto));

app.use('/', router);




