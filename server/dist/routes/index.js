"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./productos"));

var _mensajes = _interopRequireDefault(require("./mensajes"));

var _usuarios = _interopRequireDefault(require("./usuarios"));

var _calculo = require("../utils/calculo");

var _child_process = require("child_process");

var _os = _interopRequireDefault(require("os"));

var _path = _interopRequireDefault(require("path"));

var _email = require("../services/email");

var _validationLogin = require("../services/validationLogin");

//import carritoRouter from './carrito';
var scriptPath = _path["default"].resolve(__dirname, '../utils/calculo');

var router = _express["default"].Router();

var visitas = 0;
router.post('/send-gmail', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var body, destination, subject, content, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = req.body;

            if (!(!body || !body.dest || !body.subject || !body.content)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: "mandame en el body los siguientes datos: 'dest', 'subject' y 'content'",
              body: body
            }));

          case 3:
            destination = body.dest;
            subject = body.subject;
            content = body.content;
            _context.prev = 6;
            _context.next = 9;
            return _email.EmailService.sendEmail(destination, subject, content);

          case 9:
            response = _context.sent;
            res.json(response);
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            res.status(500).json(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/send-email', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var body, destination, subject, content, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('sending email...');
            body = req.body;
            destination = 'americo.dicki24@ethereal.email';
            subject = 'Hola Americo Dicki!';
            content = "\n    <h1>HOLAAAA</h1>\n    <p> Te queriamos dar la bienvenida a este mundo de nodemailer</p>\n    ";
            _context2.prev = 5;
            _context2.next = 8;
            return _email.EmailService.sendEmail(destination, subject, content);

          case 8:
            response = _context2.sent;
            console.log(response);
            res.json(response);
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](5);
            res.status(500).json(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.use('/productos', _validationLogin.validateLogIn, _productos["default"]);
router.use('/mensajes', _validationLogin.validateLogIn, _mensajes["default"]);
router.use('/usuarios', _usuarios["default"]); //Desafio 29

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