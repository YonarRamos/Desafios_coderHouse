"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require('../Usuarios/DAOs/memory'),
    UsuariosMemDAO = _require.UsuariosMemDAO;

var UsuariosMongoDAO = require('./DAOs/mongo');

var UsuariosMysqlDAO = require('../Usuarios/DAOs/mySql');

var UsuariosSqliteDAO = require('../Usuarios/DAOs/sqlite3');

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
          console.log('RETORNANDO INSTANCIA USER MONGO ATLAS');
          return new UsuariosMongoDAO(true);

        case TipoPersistencia.MONGO_LOCAL:
          console.log('RETORNANDO INSTANCIA MONGO LOCAL');
          return new UsuariosMongoDAO(true);

        case TipoPersistencia.SQLITE3:
          console.log('RETORNANDO INSTANCIA SQLITE3');
          return new UsuariosSqliteDAO('usuarios');

        case TipoPersistencia.MYSQL:
          console.log('RETORNANDO INSTANCIA MYSQL');
          return new UsuariosMysqlDAO('usuarios');

        default:
          console.log('RETORNANDO INSTANCIA MEMORIA');
          return UsuariosMemDAO;
      }
    }
  }]);
  return FactoryDAO;
}();

module.exports = {
  FactoryDAO: FactoryDAO,
  TipoPersistencia: TipoPersistencia
};