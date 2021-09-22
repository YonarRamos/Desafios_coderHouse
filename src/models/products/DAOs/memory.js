/* import {
  newProductI,
  ProductI,
  ProductBaseClass,
  ProductQuery,
} f rom '../products.interface';*/

class ProductosMemDAO {
  constructor() {
    const mockData = [
      {"id":1,"timestamp":"2021-08-28T15:54:54-03:00","codigo":"1630176186406","name":"Lapiz","description":"lorem ipsum","price":35,"thumbnail":"https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png","stock":45},
      {"name":"Calculadora","description":"lorem ipsum dolor","price":125,"thumbnail":"https://cdn2.iconfinder.com/data/icons/draw-and-design/512/esquadra-2-256.png","stock":60,"timestamp":"2021-08-28T16:08:28-03:00","id":"2"}
    ];

    mockData.forEach((aMock) => this.productos.push(aMock));
  }

  findIndex(id) {
    return this.productos.findIndex((aProduct) => aProduct._id == id);
  }

  find(id){
    return this.productos.find((aProduct) => aProduct._id === id);
  }

  async get(id) {
    if (id) {
      return this.productos.filter((aProduct) => aProduct._id === id);
    }
    return this.productos;
  }

  async add(data){
    if (!data.nombre || !data.precio) throw new Error('invalid data');

    const newItem = {
      _id: (this.productos.length + 1).toString(),
      nombre: data.nombre,
      precio: data.precio,
    };

    this.productos.push(newItem);

    return newItem;
  }

  async update(id, newProductData) {
    const index = this.findIndex(id);
    const oldProduct = this.productos[index];

    const updatedProduct = { ...oldProduct, ...newProductData };
    this.productos.splice(index, 1, updatedProduct);
    return updatedProduct;
  }

  async delete(id) {
    const index = this.findIndex(id);
    this.productos.splice(index, 1);
  }

/*   async query(options){
    type Conditions = (aProduct: ProductI) => boolean;
    const query: Conditions[] = [];

    if (options.nombre)
      query.push((aProduct: ProductI) => aProduct.nombre == options.nombre);

    if (options.precio)
      query.push((aProduct: ProductI) => aProduct.precio == options.precio);

    return this.productos.filter((aProduct) => query.every((x) => x(aProduct)));
  } */
}

module.exports = ProductosMemDAO;