"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("../services/db");

var _utils = require("../utils");

/**
 * 
 * Para agregar un usuario, primero creamos una referencia a un documento con una key que nosotros querramos
 * para ello usamos el metodo doc de la coleccion que estamos usando
 * Si solo llamamos al metodo, FireStore nos crea la key se forma random. tambien podemos pasarle por parametro
 * la key del documento 
 */
var addUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var UserDocument;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //Si queremos poner nuestra propia key descomentamos linea 14-17 y comentamos linea 18
            // const randomKey = `miKey-${between(0,300000)}`;
            // console.log(randomKey);
            // const UserDocument = UserDB.doc(randomKey);
            UserDocument = _db.UserDB.doc();
            _context.next = 4;
            return UserDocument.create(data);

          case 4:
            //vamos a crear un documento cuya key sea (algo generico)
            //a ese documento le metemos data en formato json
            console.log("salio todo bien!");
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR");
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function addUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addUser = addUser;