import Carrito from "../models/Carrito";
const carritoController = {};

carritoController.listarById = (req, res) => {
  try {
    const id = req.params.id
    const cart = new Carrito()
    const carrito = cart.showOne(id)
    res.json(
      carrito
    )
    // res.render('index', {productos})

  } catch (error) {
    console.log('Listar Error:', error);

    return res.status(404).json({
      msg:`El carrito indicado no existe`
    })
  }
}

carritoController.agregar = (req, res) => {
  try {
    const id_producto = req.params.id_producto;
    const car = new Carrito();
    car.add(id_producto);
    res.json({
      msg:`Producto ${id_producto} agregado al carrito `
    })
  } catch (error) {
    console.log('POST Error:', error);

    return res.status(400).json({
      msg:`Error al agregar producto al carrito:${error}`
    })
  }
}


carritoController.borrar = (req, res)=>{
  try {
    const id = req.params.id_producto
    const car = new Carrito()
    const carrito = car.delete(id)
    res.json({
      msg:`Producto ${id} eliminado del carrito.`,
      carrito
    }) 

  } catch (error) {
    console.log('Delete:', error);

    return res.json({
      msg:`Error al borrar producto del carrito:${error}`
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
module.exports = carritoController;