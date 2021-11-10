import express from 'express';
import productosRouter from './productos';
//import carritoRouter from './carrito';
import mensajesRouter from './mensajes';
import usuariosRouter from './usuarios';
import { calculo } from "../utils/calculo";
import { fork } from 'child_process';
import os from 'os';
import path from 'path';
const scriptPath = path.resolve(__dirname, '../utils/calculo');
import { EmailService } from '../services/email';
const router = express.Router();

import { validateLogIn } from "../services/validationLogin";
let visitas = 0;

router.post('/send-gmail', async (req, res) => {
    const { body } = req;
  
    if (!body || !body.dest || !body.subject || !body.content)
      return res.status(400).json({
        msg: "mandame en el body los siguientes datos: 'dest', 'subject' y 'content'",
        body,
      });
  
    const destination = body.dest;
    const subject = body.subject;
    const content = body.content;
  
    try {
      const response = await EmailService.sendEmail(
        destination,
        subject,
        content
      );
  
      res.json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/send-email', async (req, res) => {
    console.log('sending email...')
    const { body } = req;
  
    const destination = 'americo.dicki24@ethereal.email';
    const subject = 'Hola Americo Dicki!';
    const content = `
    <h1>HOLAAAA</h1>
    <p> Te queriamos dar la bienvenida a este mundo de nodemailer</p>
    `;
  
    try {
      const response = await EmailService.sendEmail(
        destination,
        subject,
        content
      );
        console.log(response);
      res.json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.use('/productos', validateLogIn , productosRouter);
router.use('/mensajes', validateLogIn ,mensajesRouter);
router.use('/usuarios', usuariosRouter);

//Desafio 29
router.get('/info', ( req, res ) => {
    res.json({
        Directorio_actual: process.cwd(),
        PID: process.pid, 
        Node_version : process.version,
        Titulo_proceso: process.title,
        Sistema_operativo:process.platform,
        Uso_memoria: JSON.stringify(process.memoryUsage()),
        Arguntentos: JSON.stringify(process.argv),
        Nro_procesadores: os.cpus().length
    })
});

router.get('/visitas', (req, res)=>{
    visitas += 1;
    res.json({
        visitas
    });
})
    
router.get('/randoms', (req, res)=> {
    const cant = req.query.cant || 100000;
    //const obj = fork(scriptPath);
    //obj.send(['start', cant]);
    // obj.on('message', (obj) => {
    //     res.status(200).json({
    //       resultado: obj,
    //     });
    //   });
    const result = calculo(cant);

    res.status(200).json({
        result: result
    })
});

router.get('/', (req, res) => {
    res.json({
      pid: process.pid,
      msg: 'HOLA',
    });
});
  
router.get('/slow', function (req, res) {
    console.log(`PID => ${process.pid} will work slow`);
    let sum = 0;
    for (let i = 0; i < 6e9; i++) {
        sum += i;
    }
  
    res.json({
        pid: process.pid,
        sum,
        });
});
  
router.get('/muerte', (req, res) => {
    res.json({ msg: 'Proceso detenido' });
    console.log(`PID => ${process.pid} will die`);
    process.exit(0);
  });
export default router