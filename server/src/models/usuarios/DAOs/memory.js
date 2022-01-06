const moment = require('moment');

class UsersMemDAO {
  constructor() {
    this.productos = [
      {"id":"1","timestamp":"2021-08-28T15:54:54-03:00","codigo":"1630176186406","name":"Lapiz","description":"lorem ipsum","price":35,"thumbnail":"https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png","stock":45},
      {"name":"Calculadora","description":"lorem ipsum dolor","price":125,"thumbnail":"https://cdn2.iconfinder.com/data/icons/draw-and-design/512/esquadra-2-256.png","stock":60,"timestamp":"2021-08-28T16:08:28-03:00","id":"2"}
    ];
  }
  async get(id) {
    if (id) {
      return this.productos.filter((aProduct) => aProduct.id === id);
    }
    return this.productos;
  }

  async add(data){
    const newItem = {
      id: (this.productos.length + 1).toString(),
      timestamp: moment().format(),
      codigo: Date.now(),
      name: data.name,
      description: data.description,
      price: data.price,
      thumbnail: data.thumbnail,
      stock: 45
    };

    this.productos.push(newItem);

    return newItem;
  }

  async update(id, newProductData) {
    const index = this.findIndex(id);
    console.log('indice', index)
    const oldProduct = this.productos[index];
      this.productos[index] = {
      id: oldProduct.id,
      timestamp: oldProduct.timestamp,
      codigo: oldProduct.codigo,
      ...newProductData
    };
    const updatedProduct = this.productos[index]
    console.log('new', updatedProduct); 
    return updatedProduct;
  }

  async delete(id) {
    const index = this.findIndex(id);
    this.productos.splice(index, 1);
  }
}
const ProductosMemDAO = new UsersMemDAO()
module.exports = { ProductosMemDAO };