/* import express from 'express';
import { checkAdmin } from "../middleware/admin";
import carritoController from '../controllers/carritoController';

const router = express.Router();

router.get('/listar/:id', carritoController.listarById);

 router.post('/agregar/:id_producto',checkAdmin , carritoController.agregar);

router.delete('/borrar/:id_producto',checkAdmin , carritoController.borrar);

export default router */
"use strict";