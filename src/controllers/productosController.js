import Productos from "../models/Productos";
const productosController = {};

productosController.listar = (req, res) => {
  try {
    const pr = new Productos()
    const productos = pr.show()
    res.json(
      productos
    )
    //res.render('index', {productos})

  } catch (error) {
    console.log('Listar Error:', error)
  }
}

productosController.listarById = (req, res) => {
  try {
    const id = req.params.id
    const pr = new Productos()
    const producto = pr.showOne(id)
    res.json(
      producto
    )
    // res.render('index', {productos})

  } catch (error) {
    console.log('Listar Error:', error);

    return res.status(404).json({
      msg:`Producto no encontrado`
    })
  }
}

productosController.agregar = (req, res) => {
  try {
    const body = req.body
    const pr = new Productos()
    pr.add(body)
    res.json({
      msg:"Producto agregado correctamente."
    })
  } catch (error) {
    console.log('POST Error:', error);

    return res.json({
      msg:`Error al agregar producto:${error}`
    })
  }
}


productosController.actualizar = (req, res)=>{
  try {
    const id = req.params.id
    const body = req.body
    const pr = new Productos()
    const producto = pr.edit(id, body)
    res.json({
      msg:`Producto ${producto.id} actualizado correctamente.`
    }) 

  } catch (error) {
    console.log('Update:', error);

    return res.json({
      msg:`Error al actualizar producto:${error}`
    })
  }
}

productosController.borrar = (req, res)=>{
  try {
    const id = req.params.id
    const pr = new Productos()
    const producto = pr.delete(id)
    res.json({
      msg:`Producto ${producto.id} eliminado correctamente.`
    }) 

  } catch (error) {
    console.log('Delete:', error);

    return res.json({
      msg:`Error al borrar producto:${error}`
    })
  }
}

/*productosController.nuevoForm = (req, res) => {
  try {
    res.render('nuevoForm')
  } catch (error) {
    console.log('POST Error:', error)
  }
}

*/
module.exports = productosController;