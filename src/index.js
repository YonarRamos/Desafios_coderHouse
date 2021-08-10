import express from 'express'
import router from '../routes/index.routes'
import path from 'path';
import handlebars from 'express-handlebars';
var bodyParser = require('body-parser')

const app = express()

const PORT = 9000

const server = app.listen(PORT, ()=>{
    console.log(`Server on port:${PORT}`)
})

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

server.on('error', (error)=>{
    console.log('Server error: ', error)
})

const publicPath = path.resolve(__dirname, '../public');
console.log(publicPath);
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos',router);


/* app.use('/api/productos', (req, res) => {
    //res.render('lista', productos );
  }); */