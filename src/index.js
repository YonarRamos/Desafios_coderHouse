import express from 'express'
import router from '../routes/index.routes.js'
import path from 'path';
import handlebars from 'express-handlebars';
import * as http from 'http';
import io from 'socket.io';
import Productos from "../models/Productos"

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
  }
    catch (error) {
      console.log('POST Error:', error)
    }
});
