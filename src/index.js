import express from 'express'
import router from '../routes/index.routes'
import path from 'path';

const app = express()

const PORT = 9000

const server = app.listen(PORT, ()=>{
    console.log(`Server on port:${PORT}`)
})

const viewsPath = path.resolve(__dirname, '../views');
app.set('view engine', 'ejs');
app.set('views', viewsPath)

server.on('error', (error)=>{
    console.log('Server error: ', error)
})

const publicPath = path.resolve(__dirname, '../public');
console.log(publicPath);
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', router);
