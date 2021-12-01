"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _socket = _interopRequireDefault(require("socket.io"));

var ws = /*#__PURE__*/function () {
  function ws(server) {
    (0, _classCallCheck2["default"])(this, ws);
    this.io = (0, _socket["default"])(server, {
      cors: {
        origin: "*"
      }
    });
  }

  (0, _createClass2["default"])(ws, [{
    key: "connection",
    value: function connection() {
      var _this = this;

      this.io.on('connection', function (socket) {
        try {
          var nombre;
          socket.on('connected', function (nomb) {
            nombre = nomb;
            socket.broadcast.emit("mensajes", {
              nombre: nombre,
              mensaje: "".concat(nombre, " se ha unido a la sala")
            });
            console.log('un usuario se ha conectado');
          });
          socket.on('mensaje', function (nombre, mensaje, timestamp) {
            var msg = _this.io.emit("mensajes", {
              nombre: nombre,
              mensaje: mensaje,
              timestamp: timestamp
            });
          });
          socket.on('disconnect', function () {
            _this.io.emit("mensajes", {
              nombre: nombre,
              mensaje: "".concat(nombre, " ha abandonado la sala")
            });
          });
        } catch (error) {
          console.log('POST Error:', error);
        }
      });
    }
  }]);
  return ws;
}();

;
module.exports = ws;