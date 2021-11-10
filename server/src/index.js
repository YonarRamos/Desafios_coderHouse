import config from "./utils/config";
import { myServer } from './services/server';

const puerto = config.PORT;

myServer.listen(puerto, () => console.log(`Servidor express escuchando en el puerto ${puerto} - PID WORKER ${process.pid}`));