"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ProductosMemDAO = require('../productos/DAOs/memory');

var ProductosAtlasDAO = require('./DAOs/mongo');

var ProductosMysqlDAO = require('../productos/DAOs/mySql');

var ProductosSqlitelDAO = require('../productos/DAOs/sqlite3');

var TipoPersistencia = {
  MEMORIA: 'MEM',
  MYSQL: 'MYSQL',
  SQLITE3: 'SQLITE3',
  MONGO_LOCAL: 'MONGO-LOCAL',
  MONGO_ATLAS: 'MONGO-ATLAS'
};

var FactoryDAO = /*#__PURE__*/function () {
  function FactoryDAO() {
    (0, _classCallCheck2["default"])(this, FactoryDAO);
  }

  (0, _createClass2["default"])(FactoryDAO, null, [{
    key: "get",
    value: function get(tipo) {
      switch (tipo) {
        case TipoPersistencia.MONGO_ATLAS:
          console.log('RETORNANDO INSTANCIA PRODUCT MONGO ATLAS');
          return new ProductosAtlasDAO();

        case TipoPersistencia.MONGO_LOCAL:
          console.log('RETORNANDO INSTANCIA MONGO LOCAL');
          return new ProductosAtlasDAO(true);

        case TipoPersistencia.SQLITE3:
          console.log('RETORNANDO INSTANCIA SQLITE3');
          return new ProductosSqlitelDAO('productos');

        case TipoPersistencia.MYSQL:
          console.log('RETORNANDO INSTANCIA MYSQL');
          return new ProductosMysqlDAO('productos');

        default:
          console.log('RETORNANDO INSTANCIA MEMORIA');
          return ProductosMemDAO;
      }
    }
  }]);
  return FactoryDAO;
}();

module.exports = {
  FactoryDAO: FactoryDAO,
  TipoPersistencia: TipoPersistencia
};