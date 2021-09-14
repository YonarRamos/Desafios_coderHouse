"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _path = _interopRequireDefault(require("path"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _db = _interopRequireWildcard(require("./services/db"));

var _db_sqlite = require("./services/db_sqlite");

var http = _interopRequireWildcard(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _moment = _interopRequireDefault(require("moment"));

var _fs = _interopRequireDefault(require("fs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
var puerto = 8080; //DBService.init();

_db_sqlite.SqliteDB.init();

var layoutDirPath = _path["default"].resolve(__dirname, '../views/layouts');

var partialsDirPath = _path["default"].join(__dirname, '../views/partials');

app.set('view engine', 'hbs');
app.engine('hbs', (0, _expressHandlebars["default"])({
  layoutsDir: layoutDirPath,
  extname: 'hbs',
  defaultLayout: 'main',
  partialsDir: partialsDirPath
}));

var publicPath = _path["default"].resolve(__dirname, '../public');

var chatPath = _path["default"].resolve(__dirname, '../public/chat_file.json');

app.use(_express["default"]["static"](publicPath));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
var myServer = http.Server(app);
myServer.listen(puerto, function () {
  return console.log('Server up en puerto', process.env.PORT || puerto);
});
app.use('/', _index["default"]);
/* const myWSServer = io(myServer);

myWSServer.on('connection', (socket) => {
  try {
    console.log('Un cliente se ha conectado');

    socket.on('data-productos', (data)=> {
      console.log(data)
      const pr = new Productos()
      pr.add(data)
      myWSServer.sockets.emit('response', pr.show());
    });

    socket.on('chat', (msg)=> {
      msg.timeStamp = moment().format('DD/MM/YYYY HH:MM:SS')
      let chatFile = fs.readFileSync(chatPath);
      chatFile = JSON.parse(chatFile)
      chatFile.push(msg)
      if(msg.user == 'Chat-Bot'){
        socket.emit('response-msg', chatFile);
      }else{
        myWSServer.sockets.emit('response-msg', chatFile);
      }
      
      fs.writeFileSync(chatPath, JSON.stringify(chatFile));
    });
  }
    catch (error) {
      console.log('POST Error:', error)
    }
}); */