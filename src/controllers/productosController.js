import { DBService } from '../services/db';
const tableName = 'productos';

class Products {
  async listar(req, res) {
    try {
      const items = await DBService.get(tableName);
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
    const item = await DBService.getById(tableName, id);

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
    const { codigo, name, description, stock, price, thumbnail } = req.body;

    if ( !codigo ||  !name ||  !description || !stock || !price || !thumbnail )
      return res.status(400).json({
        msg: 'missing Body fields',
      });

    const data = {
      codigo,
      name,
      description,
      stock,
      price,
      thumbnail,
    };

    const newId = await DBService.create(tableName, data);

    const newProduct = await DBService.getById(tableName, newId);

    res.json({
      msg:"Producto agregado",
      data: newProduct,
    });
  }

  async actualizar(req, res) {
    const { id } = req.params;
    const { codigo, name, description, stock, price, thumbnail } = req.body;

    if ( !codigo ||  !name ||  !description || !stock || !price || !thumbnail )
      return res.status(400).json({
        msg: 'missing Body fields',
      });

    let item = await DBService.getById(tableName, id);

    if (!item.length)
      return res.status(404).json({
        msgs: 'Product not found!',
      });

      const data = {
        codigo,
        name,
        description,
        stock,
        price,
        thumbnail,
      };

    await DBService.update(tableName, id, data);

    item = await DBService.getById(tableName, id);

    res.json({
      msg: 'Producto Actualizado',
      item,
    });
  }

  async borrar(req, res) {
    try {
      const { id } = req.params;   
      await DBService.delete(tableName, id);
      res.json({ 
      msg: 'Producto eliminado',
    });
    } catch (error) {
      res.json({
        msg: 'Error al eliminar producto',
      });      
    }
    



  }

}
export const productosController = new Products();