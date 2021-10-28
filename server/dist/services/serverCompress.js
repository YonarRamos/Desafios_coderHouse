"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _compression = _interopRequireDefault(require("compression"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _os = _interopRequireDefault(require("os"));

var _log4js = _interopRequireDefault(require("log4js"));

//Desafio 31
_log4js["default"].configure({
  appenders: {
    fileWarnAppender: {
      type: 'file',
      filename: './logs/warm.log'
    },
    warn_filter: {
      type: "logLevelFilter",
      appender: "fileWarnAppender",
      level: "warn",
      maxLevel: "warn"
    },
    fileErrorAppender: {
      type: 'file',
      filename: './logs/error.log'
    },
    error_filter: {
      type: "logLevelFilter",
      appender: "fileErrorAppender",
      level: "error",
      maxLevel: "error"
    },
    consola: {
      type: 'console'
    },
    consola_filter: {
      type: "logLevelFilter",
      appender: "consola",
      level: "info",
      maxLevel: "info"
    }
  },
  categories: {
    "default": {
      appenders: ['consola_filter', 'warn_filter', 'error_filter'],
      level: 'info'
    }
  }
});

var logger = _log4js["default"].getLogger(); // logger.level = 'info';
// Log a message
// logger.trace('Imprimimos Trace');
// logger.debug('Imprimimos Debug');


logger.info('Imprimimos Info');
logger.warn('Imprimimos Warn');
logger.error('Imprimimos Error'); //logger.fatal('Imprimimos Fatal');

var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.get('/info', function (req, res) {
  //Logger Testing
  logger.info('PID', process.pid);
  logger.warn('Numero de CPUs:', JSON.stringify(process.memoryUsage()));
  logger.error('#CPUs:', _os["default"].cpus().length); //Compression Testing

  res.send({
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
var _default = app;
exports["default"] = _default;