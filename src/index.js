import express from 'express'
import productos from '../routes/productos'

const app = express()

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`Server on port:${PORT}`)
})

server.on('error', (error)=>{
    console.log('Server error: ', Serror)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productos);
