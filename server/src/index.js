import config from "./utils/config";
import cluster from 'cluster';
import os from 'os';
import { myServer } from './services/server';
import minimist from "minimist";
const puerto = config.PORT;
const mode = config.MODE;


//Obtengo el numero de nucleos disponibles en mi PC
const numCPUs = os.cpus().length;

/* --------------------------------------------------------------------------- */
/* MASTER */
/**
 * isMaster vs isPrimary
 * https://stackoverflow.com/questions/68978929/why-is-nodejs-cluster-module-not-working
 */
switch (mode) {

  case 'FORK':
    console.log('CORRIENDO EN MODO FORK');
    myServer.listen(puerto, () => console.log(`Servidor express escuchando en el puerto ${puerto} - PID WORKER ${process.pid}`));
    break;

  case 'CLUSTER':
    console.log('CORRIENDO EN MODO CLUSTER');
    if (cluster.isMaster) {
      console.log(`NUMERO DE CPUS ===> ${numCPUs}`);
      console.log(`PID MASTER ${process.pid}`);
    
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
    
      cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died at ${Date()}`);
        cluster.fork();
      });
    } else {
      /* WORKERS */
      myServer.listen(puerto, () => console.log(`Servidor express escuchando en el puerto ${puerto} - PID WORKER ${process.pid}`));
    
    }
  break;
  
}
