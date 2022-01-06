const { productsAPI } = require('../../apis/productos');

class Products {

  async getProducts(req, res) {
    const result = await productsAPI.getProducts(req, res);
      return res.json(result);        
    }
  async addProducts(req , res ) {
    const newItem = await productsAPI.addProduct(req, res);
    return res.json(newItem);   
  }
  async updateProducts(req , res) {
    const updatedItem = await productsAPI.updateProduct(req , res);
    return res.json(updatedItem);
  }
  async deleteProducts(req, res) {
    const deletedItem = await productsAPI.deleteProduct(req , res);
    res.json(deletedItem);
  }
}

const productosController = new Products();
module.exports = { productosController }