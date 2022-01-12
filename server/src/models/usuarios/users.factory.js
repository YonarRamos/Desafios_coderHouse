const  UsuariosMemDAO = require('./DAOs/memory');
const  UsuariosMongoDAO = require('./DAOs/mongo');
const  UsuariosMysqlDAO  = require('./DAOs/mySql');
const  UsuariosSqliteDAO  = require('./DAOs/sqlite3');

const TipoPersistencia = {
  MEMORIA : 'MEM',
  MYSQL : 'MYSQL',
  SQLITE3 : 'SQLITE3',
  MONGO_LOCAL : 'MONGO-LOCAL',
  MONGO_ATLAS : 'MONGO-ATLAS',
}

class FactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case TipoPersistencia.MONGO_ATLAS:
        console.log('RETORNANDO INSTANCIA USER MONGO ATLAS');
        return new UsuariosMongoDAO(true);
      case TipoPersistencia.MONGO_LOCAL:
        console.log('RETORNANDO INSTANCIA MONGO LOCAL');
        return new UsuariosMongoDAO(false);
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
}

module.exports = { FactoryDAO, TipoPersistencia };