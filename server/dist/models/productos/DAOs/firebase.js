"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var admin = require("firebase-admin");

var moment = require('moment');

var Config = require('../../../config');

var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); //accedo a la db

var db = admin.firestore();
var productsCollection = db.collection('productos');

var ProductosFirebaseDAO = /*#__PURE__*/function () {
  function ProductosFirebaseDAO() {
    (0, _classCallCheck2["default"])(this, ProductosFirebaseDAO);
    this.productos = productsCollection;
  }

  (0, _createClass2["default"])(ProductosFirebaseDAO, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        var result, resultado, docs, _result;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!id) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return this.productos.doc(id).get();

              case 3:
                result = _context.sent;
                return _context.abrupt("return", {
                  id: result.id,
                  data: result.data()
                });

              case 7:
                _context.next = 9;
                return this.productos.get();

              case 9:
                resultado = _context.sent;
                docs = resultado.docs;
                _result = docs.map(function (aDoc) {
                  return {
                    id: aDoc.id,
                    data: aDoc.data()
                  };
                });
                return _context.abrupt("return", _result);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        var PrDocument, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                PrDocument = productsCollection.doc();
                _context2.next = 4;
                return PrDocument.create(data);

              case 4:
                result = _context2.sent;
                //vamos a crear un documento cuya key sea (algo generico)                                               //a ese documento le metemos data en formato json
                console.log("salio todo bien!");
                return _context2.abrupt("return", result);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log("ERROR");
                console.log(_context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function add(_x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, newProductData) {
        var miDoc;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                miDoc = UserDB.doc(id);
                console.log(miDoc); //Chequear si existe sino no seguir.

                _context3.next = 4;
                return UserDB.doc(id).update(data);

              case 4:
                console.log('salio bien');
                return _context3.abrupt("return", this.get(id));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return UserDB.doc(id)["delete"]();

              case 2:
                console.log('done');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ProductosFirebaseDAO;
}();

module.exports = ProductosFirebaseDAO;