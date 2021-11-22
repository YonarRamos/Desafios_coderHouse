"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.myServer = void 0;

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _path = _interopRequireDefault(require("path"));

var http = _interopRequireWildcard(require("http"));

var _ws = _interopRequireDefault(require("../services/ws"));

var _db = _interopRequireDefault(require("../services/db"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var _index = _interopRequireDefault(require("../routes/index"));

var _expressGraphql = require("express-graphql");

var _graphql = require("./graphql");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cors = require('cors');

require('dotenv').config();

var advancedOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
var app = (0, _express["default"])();
app.use(cors({
  credentials: true,
  origin: "http://localhost:8080"
}));
app.use((0, _compression["default"])()); //Graphql GET y POST productos
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: graphQLMainSchema,
//     graphiql: true,//levanta como una interfaz grafica para trabajar con graphql
//   })
// );

var myServer = http.Server(app);
exports.myServer = myServer;

var publicPath = _path["default"].resolve(__dirname, '../public');

_db["default"].init();

var StoreOptions = {
  store: _connectMongo["default"].create({
    mongoUrl: _db["default"].srv,
    mongoOptions: advancedOptions
  }),
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false
  /*   cookie: {
        maxAge: 600000
    }, */

};
app.use((0, _cookieParser["default"])());
app.use((0, _expressSession["default"])(StoreOptions)); //Inicializamos passport

app.use(_auth["default"].initialize());
app.use(_auth["default"].session());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"](publicPath));
app.use('/', _index["default"]); //inicializamos socket

var socket = new _ws["default"](myServer);
socket.connection();
var HTTPServer = http.createServer(app);
var _default = HTTPServer;
exports["default"] = _default;