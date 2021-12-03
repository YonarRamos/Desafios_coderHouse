const { FactoryDAO } = require('../src/models/productos/products.factory');
const { TipoPersistencia } = require('../src/models/productos/products.factory');
const minimist = require('minimist');
const Config = require('../src/utils/config');

//const argv = minimist(process.argv.slice(2));
//console.log('minimist config:', argv.persistencia);

let tipo = null;
if( Config.NODE_ENV == 'development' ){
  tipo = TipoPersistencia['MEMORIA'];
} else {
  tipo = TipoPersistencia['MONGO_ATLAS'];
}

class prodAPI {

  constructor() {
    this.productos = FactoryDAO.get(tipo);
  }

  async getProducts(req, res) {
    return this.productos.get(req, res);
  }

  async addProduct(req, res){
    const newProduct = await this.productos.add(req, res);
    return newProduct;
  }

  async updateProduct(req, res) {
    await this.productos.update(req, res);
    return productData;
  }

  async deleteProduct(req, res) {
    await this.productos.delete(req, res);
  }
}

const productsAPI = new prodAPI();
 
module.exports = { productsAPI };
