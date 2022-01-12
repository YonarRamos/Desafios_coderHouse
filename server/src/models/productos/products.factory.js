const ProductosMemDAO = require('../productos/DAOs/memory');
const ProductosAtlasDAO  = require('./DAOs/mongo');
const ProductosMysqlDAO  = require('../productos/DAOs/mySql');
const ProductosSqlitelDAO  = require('../productos/DAOs/sqlite3');

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
}

module.exports = { FactoryDAO, TipoPersistencia };