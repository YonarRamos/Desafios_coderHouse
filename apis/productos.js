const { NoticiasFactoryDAO } = require('../src/models/products/products.factory');
const { TipoPersistencia } = require('../src/models/products/products.factory');


/**
 Con esta variable elegimos el tipo de persistencia
 */
const tipo = TipoPersistencia.Firebase;

class prodAPI {

  constructor() {
    this.productos = NoticiasFactoryDAO.get(tipo);
  }

  async getProducts(id) {
    if (id) return this.productos.get(id);
    return this.productos.get();
  }

  async addProduct(productData){
    const newProduct = await this.productos.add(productData);
    return newProduct;
  }

  async updateProduct(id, productData) {
    await this.productos.update(id, productData);
    return productData;
  }

  async deleteProduct(id) {
    await this.productos.delete(id);
  }

  async query(options) {
    return await this.productos.query(options);
  }
}

const productsAPI = new prodAPI();
 
module.exports = { productsAPI };
