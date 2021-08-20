import Productos from "../models/Productos";
const productosController = {};

productosController.listar = (req, res) => {
      try {
        const pr = new Productos()
        const productos = pr.show()
        res.render('index', {productos})

      } catch (error) {
        console.log('Listar Error:', error)
      }
    }

    productosController.nuevoForm = (req, res) => {
      try {
        res.render('nuevoForm')
      } catch (error) {
        console.log('POST Error:', error)
      }
    }

productosController.guardar = (data) => {
  try {
    const pr = new Productos()
    pr.add(data)
  } catch (error) {
    console.log('POST Error:', error)
  }
}

module.exports = productosController;