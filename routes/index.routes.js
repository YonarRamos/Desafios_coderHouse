import express from 'express';
import productosController from '../controllers/productosController';

const router = express.Router();

router.get('/nuevo', productosController.nuevoForm);

router.get('/listar', productosController.listar);

router.post('/guardar', productosController.guardar);

/* router.get('/listar/:id', (req, res)=>{
  try {
    const id = req.params.id
    const pr = new Productos()
    const producto = pr.showOne(id)

    if(producto.length>0){
      res.json(
        producto[0]
      )
    }
    else {
      res.json(
        { error : 'producto no encontrado' }
      )
    }
  } catch (error) {
    console.log('GetById:', error)
  }
})
router.put('/actualizar/:id', (req, res)=>{
  try {
    const id = req.params.id
    const body = req.body
    const pr = new Productos()
    const producto = pr.edit(id, body)
    res.json(
      producto
    )

  } catch (error) {
    console.log('Update:', error)
  }
})

router.delete('/borrar/:id', (req, res)=>{
  try {
    const id = req.params.id
    const pr = new Productos()
    const producto = pr.delete(id)
    res.json(producto)

  } catch (error) {
    console.log('Delete:', error)
  }
}) */
export default router