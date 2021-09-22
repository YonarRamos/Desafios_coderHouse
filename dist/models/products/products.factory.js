"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require('../products/DAOs/memory'),
    ProductosMemDAO = _require.ProductosMemDAO;

var _require2 = require('../products/DAOs/fs'),
    ProductosFSDAO = _require2.ProductosFSDAO;

var _require3 = require('./DAOs/mongo'),
    ProductosAtlasDAO = _require3.ProductosAtlasDAO;

var _require4 = require('path'),
    path = _require4.path;

var TipoPersistencia = {
  Memoria: 'MEM',
  FileSystem: 'FS',
  MYSQL: 'MYSQL',
  SQLITE3: 'SQLITE3',
  LocalMongo: 'LOCAL-MONGO',
  MongoAtlas: 'MONGO-ATLAS',
  Firebase: 'FIREBASE'
};

var NoticiasFactoryDAO = /*#__PURE__*/function () {
  function NoticiasFactoryDAO() {
    (0, _classCallCheck2["default"])(this, NoticiasFactoryDAO);
  }

  (0, _createClass2["default"])(NoticiasFactoryDAO, null, [{
    key: "get",
    value: function get(tipo) {
      switch (tipo) {
        case TipoPersistencia.FileSystem:
          console.log('RETORNANDO INSTANCIA CLASE FS');
          var filePath = path.resolve(__dirname, './DAOs/products.json');
          console.log(filePath);
          return new ProductosFSDAO(filePath);

        case TipoPersistencia.MongoAtlas:
          console.log('RETORNANDO INSTANCIA CLASE MONGO ATLAS');
          return new ProductosAtlasDAO();

        case TipoPersistencia.LocalMongo:
          console.log('RETORNANDO INSTANCIA CLASE MONGO LOCAL');
          return new ProductosAtlasDAO(true);

        default:
          console.log('RETORNANDO INSTANCIA CLASE MEMORIA');
          return new ProductosMemDAO();
      }
    }
  }]);
  return NoticiasFactoryDAO;
}();

module.exports = {
  NoticiasFactoryDAO: NoticiasFactoryDAO,
  TipoPersistencia: TipoPersistencia
};