const { ProductosMemDAO } = require('../products/DAOs/memory');
const { ProductosFSDAO } = require('../products/DAOs/fs');
const { ProductosAtlasDAO } = require('./DAOs/mongo');

const { path } = require('path');

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
        const filePath = path.resolve(__dirname, './DAOs/products.json');
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
}

module.exports = { NoticiasFactoryDAO, TipoPersistencia };