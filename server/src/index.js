import config from "./utils/config";
import { myServer } from './services/server';
import myServerCompress from './services/serverCompress';

const puerto = config.PORT;

myServer.listen(puerto, () => console.log(`Servidor express escuchando en el puerto ${puerto} - PID WORKER ${process.pid}`));
//Desafio 31
myServerCompress.listen(4000, () => console.log(`Servidor express compressed escuchando en el puerto ${4000} - PID WORKER ${process.pid}`));
