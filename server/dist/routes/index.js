"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./productos"));

var _carrito = _interopRequireDefault(require("./carrito"));

var _mensajes = _interopRequireDefault(require("./mensajes"));

var _usuarios = _interopRequireDefault(require("./usuarios"));

var _calculo = require("../utils/calculo");

var _child_process = require("child_process");

var _os = _interopRequireDefault(require("os"));

var _path = _interopRequireDefault(require("path"));

var _auth_local = require("../middleware/auth_local");

var router = _express["default"].Router();

router.use('/productos', _productos["default"]);
router.use('/mensajes', _mensajes["default"]);
router.use('/usuarios', _usuarios["default"]);
router.use('/carrito', _carrito["default"]); //Desafio 29

router.get('/info', function (req, res) {
  res.json({
    Directorio_actual: process.cwd(),
    PID: process.pid,
    Node_version: process.version,
    Titulo_proceso: process.title,
    Sistema_operativo: process.platform,
    Uso_memoria: JSON.stringify(process.memoryUsage()),
    Arguntentos: JSON.stringify(process.argv),
    Nro_procesadores: _os["default"].cpus().length
  });
});
router.get('/visitas', function (req, res) {
  visitas += 1;
  res.json({
    visitas: visitas
  });
});
router.get('/randoms', function (req, res) {
  var cant = req.query.cant || 100000; //const obj = fork(scriptPath);
  //obj.send(['start', cant]);
  // obj.on('message', (obj) => {
  //     res.status(200).json({
  //       resultado: obj,
  //     });
  //   });

  var result = (0, _calculo.calculo)(cant);
  res.status(200).json({
    result: result
  });
});
router.get('/', function (req, res) {
  res.json({
    pid: process.pid,
    msg: 'HOLA'
  });
});
router.get('/slow', function (req, res) {
  console.log("PID => ".concat(process.pid, " will work slow"));
  var sum = 0;

  for (var i = 0; i < 6e9; i++) {
    sum += i;
  }

  res.json({
    pid: process.pid,
    sum: sum
  });
});
router.get('/muerte', function (req, res) {
  res.json({
    msg: 'Proceso detenido'
  });
  console.log("PID => ".concat(process.pid, " will die"));
  process.exit(0);
});
var _default = router;
exports["default"] = _default;