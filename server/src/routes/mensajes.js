import { Router } from 'express';
import { checkAdmin } from "../middleware/admin";
import { mensajesController } from '../controllers/mensajesController';

const router = Router();


//router.get('/nuevo', productosController.nuevoForm);

router.get('/', mensajesController.listar);

 //router.get('/listar/:id', mensajesConttroller.listarById);

router.post('/agregar', mensajesController.agregar);

//router.put('/actualizar/:id', mensajesConttroller.actualizar);

//router.delete('/borrar/:id',checkAdmin , mensajesConttroller.borrar);

export default router