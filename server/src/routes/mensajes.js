import { Router } from 'express';
//import { checkAdmin } from "../middleware/admin";
import { MensajesController } from '../controllers/mensajesController';

const router = Router();


router.get('/', MensajesController.get);

router.post('/', MensajesController.add);

//router.get('/listar/:id', mensajesConttroller.listarById);

//router.post('/agregar', mensajesController.agregar);

//router.put('/actualizar/:id', mensajesConttroller.actualizar);

//router.delete('/borrar/:id',checkAdmin , mensajesConttroller.borrar);

export default router