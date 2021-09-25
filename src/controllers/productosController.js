const { DBService } = require('../services/db');
const productos = require('../models/productos.js');
const { productsAPI } = require('../../apis/productos');
const { ProductQuery } = require('../models/products/products.interface');
const tableName = 'productos';

class Products {

  checkAddProducts(req, res, next) {
    const { name, price, stock, description, thumbnail } = req.body;

    if (!name || !price || typeof name !== 'string' || isNaN(price) || !stock || isNaN(stock) || !description || typeof description !== 'string' || !thumbnail || typeof thumbnail !== 'string') {
      return res.status(400).json({
        msg: 'Campos del body invalidos',
      });
    }

    next();
  }

  async checkProductExists(req, res, next) {
    const id = req.params.id;
    const producto = await productsAPI.getProducts(id);

    if (!producto) {
      return res.status(404).json({
        msg: 'producto not found',
      });
    }
    next();
  }

  async getProducts(req, res) {
    const { id } = req.params;
    const { name, price } = req.query;
    if (id) {
      const result = await productsAPI.getProducts(id);
      if (!result.length)
        return res.status(404).json({
          data: 'objeto no encontrado',
        });

      return res.json({
        data: result,
      });
    }

    const query = {};

    if (name) query.name = name.toString();

    if (price) query.price = Number(price);

    if (Object.keys(query).length) {
      return res.json({
        data: await productsAPI.query(query),
      });
    }

    res.json({
      data: await productsAPI.getProducts(),
    });
  }

  async addProducts(req , res ) {
    const newItem = await productsAPI.addProduct(req.body);

    res.json({
      msg: 'producto agregado con exito',
      data: newItem,
    });
  }

  async updateProduct(req , res) {
    const id = req.params.id;

    const updatedItem = await productsAPI.updateProduct(id, req.body);

    res.json({
      msg: 'producto actualizado',
      data: updatedItem,
    });
  }

  async deleteProducts(req, res) {
    const id = req.params.id;
    await productsAPI.deleteProduct(id);
    res.json({
      msg: 'producto borrado',
    });
  }

  /*  async query(options) {
    return await productsAPI.query(options);
  }

 async listar(req, res) {
    try {
      const items = await productos.find();
      console.log(items);
      if(items.length == 0){
        return res.status(404).json({
          msg: 'No hay productos cargados.'
        })
      }else{
        res.json({
          data: items,
        });      
      }
    } catch (error) {
      console.error('Listar Error:', error)
    }
  }

  async listarById(req, res) {
    const { id } = req.params;
    const item = await productos.find({_id : id});

    if (item.length == 0) {
      return res.status(404).json({
        msg: 'Producto no encontrado',
      });      
    }else{
      res.json({
        data: item,
      });
    }
  }

  async agregar(req, res) {
    const { name, description, stock, price, thumbnail } = req.body;

    if ( !name ||  !description || !stock || !price || !thumbnail )
      return res.status(400).json({
        msg: 'missing Body fields',
      });

    const data = {
      name,
      description,
      stock,
      price,
      thumbnail,
    };

    await productos.insertMany([data]).then((producto)=>{
      res.json({
        msg:"Producto agregado",
        data: producto,
      });      
    })

  }

  async actualizar(req, res) {
    const { id } = req.params;
    const { name, description, stock, price, thumbnail } = req.body;
    
    if ( !name ||  !description || !stock || !price || !thumbnail ){
      return res.status(400).json({
        msg: 'missing Body fields',
      });     
    }
      const data = {
        name,
        description,
        stock,
        price,
        thumbnail,
      };
      console.log('update', data)
    await productos.findOneAndUpdate({_id : id}, data, { new: true }).then((producto) => {
      res.json({
        msg: 'Producto Actualizado',
        producto,
      });      
    })
  }

  async borrar(req, res) {
    try {
      const { id } = req.params;   
      await productos.remove({_id : id}).then((producto)=>{
          res.json({ 
          msg: 'Producto eliminado',
          data: producto
        });
      });


    } catch (error) {
      res.json({
        msg: 'Error al eliminar producto',
      });      
    }
    



  } */

}
const productosController = new Products();
module.exports = { productosController }