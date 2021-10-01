import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController.js';
import { validateLogIn } from "../services/validationLogin";

const router = Router();

router.post('/registrar', validateLogIn, usuariosController.add);
router.get('/listar', validateLogIn, usuariosController.get);
router.post('/login', usuariosController.login);

export default router