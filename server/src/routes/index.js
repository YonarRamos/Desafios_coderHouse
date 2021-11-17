import express from 'express';
import productosRouter from './productos';
//import carritoRouter from './carrito';
import mensajesRouter from './mensajes';
import usuariosRouter from './usuarios';
import { calculo } from "../utils/calculo";
import { fork } from 'child_process';
import os from 'os';
import path from 'path';
const router = express.Router();
import { isLoggedIn } from "../middleware/auth_local";

router.use('/productos' , productosRouter);
router.use('/mensajes', isLoggedIn ,mensajesRouter);
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