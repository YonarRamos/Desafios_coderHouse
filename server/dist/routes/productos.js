"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _admin = require("../middleware/admin");

//import { productosController } from '../controllers/productosController.js';
var router = (0, _express.Router)(); //router.get('/nuevo', productosController.nuevoForm);
//router.get('/listar', productosController.listar);
// router.get('/listar/:id', productosController.listarById);
// router.get('/vista-test/:cant', productosController.fakerProducts);
// router.post('/agregar', productosController.agregar);
// router.put('/actualizar/:id', productosController.actualizar);
// router.delete('/borrar/:id',checkAdmin , productosController.borrar);

var _default = router;
exports["default"] = _default;