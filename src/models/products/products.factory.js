const { ProductosMemDAO } = require('../products/DAOs/memory');
const { ProductosFSDAO } = require('../products/DAOs/fs');
const { ProductosAtlasDAO } = require('./DAOs/mongo');
const  ProductosMysqlDAO  = require('../products/DAOs/mySql');
const  ProductosSqlitelDAO  = require('../products/DAOs/sqlite3');
const  ProductosFirebaseDAO  = require('../products/DAOs/firebase');
const path = require('path');

const TipoPersistencia = {
  Memoria : 'MEM',
  FileSystem : 'FS',
  MYSQL : 'MYSQL',
  SQLITE3 : 'SQLITE3',
  LocalMongo : 'LOCAL-MONGO',
  MongoAtlas : 'MONGO-ATLAS',
  Firebase : 'FIREBASE',
}

class NoticiasFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case TipoPersistencia.FileSystem:
        console.log('RETORNANDO INSTANCIA CLASE FS');
        const filePath = path.resolve(__dirname, '../../../public/productos.json');
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
}

module.exports = { NoticiasFactoryDAO, TipoPersistencia };