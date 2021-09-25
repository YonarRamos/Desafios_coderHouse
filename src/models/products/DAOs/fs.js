const fs = require ('fs');

class ProductosFSDAO {

  constructor(fileName) {
    const mockData = [
      { _id: '1', nombre: 'lapiz', precio: 200 },
      { _id: '2', nombre: 'cartuchera', precio: 250 },
      { _id: '3', nombre: 'boligoma', precio: 260 },
    ];
    this.nombreArchivo = fileName;
    this.productos = mockData;
    this.guardar();
  }

  async leer(archivo){
    this.productos = JSON.parse(await fs.promises.readFile(archivo, 'utf-8'));
  }

  async guardar(){
    await fs.promises.writeFile(
      this.nombreArchivo,
      JSON.stringify(this.productos, null, '\t')
    );
  }

  async findIndex(id){
    await this.leer(this.nombreArchivo);
    return this.productos.findIndex((aProduct) => aProduct._id == id);
  }

  async find(id) {
    await this.leer(this.nombreArchivo);

    return this.productos.find((aProduct) => aProduct._id === id);
  }

  async get(id){
    await this.leer(this.nombreArchivo);

    if (id) {
      return this.productos.filter((aProduct) => aProduct._id === id);
    }
    return this.productos;
  }

  async add(data){
    if (!data.nombre || !data.precio) throw new Error('invalid data');

    await this.leer(this.nombreArchivo);

    const newItem = {
      _id: (this.productos.length + 1).toString(),
      nombre: data.nombre,
      precio: data.precio,
    };

    this.productos.push(newItem);

    await this.guardar();

    return newItem;
  }

  async update(id, newProductData){
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    const oldProduct = this.productos[index];

    const updatedProduct = { ...oldProduct, ...newProductData };
    this.productos.splice(index, 1, updatedProduct);

    await this.guardar();

    return updatedProduct;
  }

  async delete(id){
    await this.leer(this.nombreArchivo);

    const index = await this.findIndex(id);
    this.productos.splice(index, 1);
    await this.guardar();
  }
}

module.exports = { ProductosFSDAO };