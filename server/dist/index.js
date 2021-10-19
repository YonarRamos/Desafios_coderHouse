"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = _interopRequireDefault(require("./utils/config"));

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _server = require("./services/server");

var _minimist = _interopRequireDefault(require("minimist"));

var puerto = _config["default"].PORT; //Obtenemos los argumentos, los parseamos y eliminamos los 2 primeros que se crean por defecto

var argv = (0, _minimist["default"])(process.argv);
console.log('Argumentos:', process.argv);
console.log('minimist:', JSON.stringify(argv)); //Obtengo el numero de nucleos disponibles en mi PC

var numCPUs = _os["default"].cpus().length;
/* --------------------------------------------------------------------------- */

/* MASTER */

/**
 * isMaster vs isPrimary
 * https://stackoverflow.com/questions/68978929/why-is-nodejs-cluster-module-not-working
 */


switch (argv.mode) {
  case 'FORK':
    console.log('CORRIENDO EN MODO FORK');

    _server.myServer.listen(puerto, function () {
      return console.log("Servidor express escuchando en el puerto ".concat(puerto, " - PID WORKER ").concat(process.pid));
    });

    break;

  case 'CLUSTER':
    console.log('CORRIENDO EN MODO CLUSTER');

    if (_cluster["default"].isMaster) {
      console.log("NUMERO DE CPUS ===> ".concat(numCPUs));
      console.log("PID MASTER ".concat(process.pid));

      for (var i = 0; i < numCPUs; i++) {
        _cluster["default"].fork();
      }

      _cluster["default"].on('exit', function (worker) {
        console.log("Worker ".concat(worker.process.pid, " died at ").concat(Date()));

        _cluster["default"].fork();
      });
    } else {
      /* WORKERS */
      _server.myServer.listen(puerto, function () {
        return console.log("Servidor express escuchando en el puerto ".concat(puerto, " - PID WORKER ").concat(process.pid));
      });
    }

    break;

  default:
    console.log('CORRIENDO EN MODO DEFAULT FORK');

    _server.myServer.listen(puerto, function () {
      return console.log("Servidor express escuchando en el puerto ".concat(puerto, " - PID WORKER ").concat(process.pid));
    });

    break;
}