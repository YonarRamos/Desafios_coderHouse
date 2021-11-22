"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mensajesController = require("../controllers/mensajesController");

//import { checkAdmin } from "../middleware/admin";
var router = (0, _express.Router)(); //router.get('/nuevo', productosController.nuevoForm);
//router.get('/', mensajesController.listar);
//router.get('/listar/:id', mensajesConttroller.listarById);
//router.post('/agregar', mensajesController.agregar);
//router.put('/actualizar/:id', mensajesConttroller.actualizar);
//router.delete('/borrar/:id',checkAdmin , mensajesConttroller.borrar);

var _default = router;
exports["default"] = _default;