import express from 'express'
import router from './routes/index.routes.js'
import path from 'path';
import handlebars from 'express-handlebars';
import * as http from 'http';
import io from 'socket.io';
import Productos from "../src/models/Productos"
import moment from 'moment'

import fs from 'fs'

const app = express()

const puerto = 8080

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

const myServer = http.Server(app);

myServer.listen(puerto, () => console.log('Server up en puerto', puerto));

app.use('/', router);

const myWSServer = io(myServer);

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
});
