"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _path = _interopRequireDefault(require("path"));

var http = _interopRequireWildcard(require("http"));

var _ws = _interopRequireDefault(require("./services/ws"));

var _db = _interopRequireDefault(require("./services/db"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cors = require('cors');

var app = (0, _express["default"])();
var myServer = http.Server(app);
var puerto = 8080;

var publicPath = _path["default"].resolve(__dirname, '../public');

app.use(cors());
app.use((0, _expressSession["default"])({
  secret: 'mySecretkey',
  // clave para firmar la cookie
  cookie: {
    maxAge: 60000
  },
  // Tiempo en el que expira
  saveUninitialized: true,
  // Que guarde la cookie asi este vacia
  resave: true // Que la guarde asi el endpoint no la use

}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"](publicPath));

_db["default"].init(); //inicializamos socket


var socket = new _ws["default"](myServer);
socket.connection();
myServer.listen(puerto, function () {
  return console.log('Server up en puerto', process.env.PORT || puerto);
});
app.use('/', _index["default"]);