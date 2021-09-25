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

var ProductosMysqlDAO = require('../products/DAOs/mySql');

var ProductosSqlitelDAO = require('../products/DAOs/sqlite3');

var ProductosFirebaseDAO = require('../products/DAOs/firebase');

var path = require('path');

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
          var filePath = path.resolve(__dirname, '../../../public/productos.json');
          console.log(filePath);
          return new ProductosFSDAO(filePath);

        case TipoPersistencia.MongoAtlas:
          console.log('RETORNANDO INSTANCIA CLASE MONGO ATLAS');
          return new ProductosAtlasDAO();

        case TipoPersistencia.LocalMongo:
          console.log('RETORNANDO INSTANCIA CLASE MONGO LOCAL');
          return new ProductosAtlasDAO(true);

        case TipoPersistencia.SQLITE3:
          console.log('RETORNANDO INSTANCIA CLASE SQLITE3');
          return new ProductosSqlitelDAO('productos');

        case TipoPersistencia.MYSQL:
          console.log('RETORNANDO INSTANCIA CLASE MYSQL');
          return new ProductosMysqlDAO('productos');

        case TipoPersistencia.Firebase:
          console.log('RETORNANDO INSTANCIA CLASE FIREBASE');
          return new ProductosFirebaseDAO();

        default:
          console.log('RETORNANDO INSTANCIA CLASE MEMORIA');
          return ProductosMemDAO;
      }
    }
  }]);
  return NoticiasFactoryDAO;
}();

module.exports = {
  NoticiasFactoryDAO: NoticiasFactoryDAO,
  TipoPersistencia: TipoPersistencia
};