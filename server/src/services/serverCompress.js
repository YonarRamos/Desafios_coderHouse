import compression from 'compression';
import express from 'express';
import cors from 'cors';
import os from 'os';
import log4js from 'log4js';

//Desafio 31
  log4js.configure({
    appenders: {
      fileWarnAppender: { type: 'file', filename: './logs/warm.log' },
      warn_filter:{ type: "logLevelFilter", appender: "fileWarnAppender", level: "warn", maxLevel: "warn" },
      fileErrorAppender: { type: 'file', filename: './logs/error.log' },
      error_filter:{ type: "logLevelFilter", appender: "fileErrorAppender", level: "error", maxLevel: "error" },
      consola: { type: 'console' },
      consola_filter:{ type: "logLevelFilter", appender: "consola", level: "info", maxLevel: "info" },
    },
    categories: {
      default: { appenders: ['consola_filter', 'warn_filter', 'error_filter'], level: 'info'},
    },
  });

const logger = log4js.getLogger();

// logger.level = 'info';

// Log a message
// logger.trace('Imprimimos Trace');
// logger.debug('Imprimimos Debug');
logger.info('Imprimimos Info');
logger.warn('Imprimimos Warn');
logger.error('Imprimimos Error');
//logger.fatal('Imprimimos Fatal');

const app = express();
app.use(compression());
app.use(cors());

app.get('/info', ( req, res ) => {
  //Logger Testing
  logger.info( 'PID', process.pid );
  logger.warn( 'Numero de CPUs:', JSON.stringify(process.memoryUsage()) );
  logger.error( '#CPUs:', os.cpus().length );
  //Compression Testing
  res.send({
      Directorio_actual: process.cwd(),
      PID: process.pid, 
      Node_version : process.version,
      Titulo_proceso: process.title,
      Sistema_operativo:process.platform,
      Uso_memoria: JSON.stringify(process.memoryUsage()),
      Arguntentos: JSON.stringify(process.argv),
      Nro_procesadores: os.cpus().length
  });
});

export default app;