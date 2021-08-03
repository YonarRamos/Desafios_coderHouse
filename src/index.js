import express from 'express'
import productos from '../routes/productos'
import path from 'path';

const app = express()

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`Server on port:${PORT}`)
})

server.on('error', (error)=>{
    console.log('Server error: ', error)
})

const publicPath = path.resolve(__dirname, '../public');
console.log(publicPath);
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productos);
