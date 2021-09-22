import express from 'express'
import router from './routes/index.js'
import path from 'path';
import handlebars from 'express-handlebars';
import { DBService } from './services/db';
import { SqliteDB } from './services/db_sqlite';
import * as http from 'http';
import io from 'socket.io';
import moment from 'moment'
import mongoConecction from "./services/db";

import fs from 'fs'

const app = express()

const puerto = process.env.PORT || 8080;
//DBService.init();
SqliteDB.init();
const layoutDirPath = path.resolve(__dirname, '../views/layouts');
const partialsDirPath = path.join(__dirname, '../views/partials');
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    handlebars({
      layoutsDir: layoutDirPath,
      extname: 'hbs',
      defaultLayout: 'main',
      partialsDir: partialsDirPath,
    })
  );

const publicPath = path.resolve(__dirname, '../public');
const chatPath = path.resolve(__dirname, '../public/chat_file.json');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);

const errorHandler = (err, req, res, next) => {
  console.log(`HA OCURRIDO UN ERROR ${err}`);
  res.status(500).json({
    err : err.message,
  });
};

app.use(errorHandler);

const myServer = http.Server(app);

myServer.listen(puerto, () => console.log('Server up en puerto', process.env.PORT || puerto));
/* const myWSServer = io(myServer);

myWSServer.on('connection', (socket) => {
  try {
    console.log('Un cliente se ha conectado');

    socket.on('data-productos', (data)=> {
      console.log(data)
      const pr = new Productos()
      pr.add(data)
      myWSServer.sockets.emit('response', pr.show());
    });

    socket.on('chat', (msg)=> {
      msg.timeStamp = moment().format('DD/MM/YYYY HH:MM:SS')
      let chatFile = fs.readFileSync(chatPath);
      chatFile = JSON.parse(chatFile)
      chatFile.push(msg)
      if(msg.user == 'Chat-Bot'){
        socket.emit('response-msg', chatFile);
      }else{
        myWSServer.sockets.emit('response-msg', chatFile);
      }
      
      fs.writeFileSync(chatPath, JSON.stringify(chatFile));
    });
  }
    catch (error) {
      console.log('POST Error:', error)
    }
}); */
