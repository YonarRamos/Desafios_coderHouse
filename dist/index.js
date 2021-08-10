"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("../routes/index.routes"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 9000;
var server = app.listen(PORT, function () {
  console.log("Server on port:".concat(PORT));
});

var viewsPath = _path["default"].resolve(__dirname, '../views');

app.set('view engine', 'pug');
app.set('views', viewsPath);
server.on('error', function (error) {
  console.log('Server error: ', error);
});

var publicPath = _path["default"].resolve(__dirname, '../public');

console.log(publicPath);
app.use(_express["default"]["static"](publicPath));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/api/productos', _index["default"]);