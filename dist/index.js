"use strict";

var _express = _interopRequireDefault(require("express"));

var _mascotas = _interopRequireDefault(require("./routes/mascotas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 3000;
var server = app.listen(PORT, function () {
  console.log("Server on port 3000");
});
server.on('error', function (error) {
  console.log('Server error: ', Serror);
});
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/api/productos', _mascotas["default"]);