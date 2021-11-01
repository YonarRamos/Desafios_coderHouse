"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = _interopRequireDefault(require("./utils/config"));

var _server = require("./services/server");

var puerto = _config["default"].PORT;

_server.myServer.listen(puerto, function () {
  return console.log("Servidor express escuchando en el puerto ".concat(puerto, " - PID WORKER ").concat(process.pid));
});