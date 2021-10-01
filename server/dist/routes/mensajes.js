"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _admin = require("../middleware/admin");

var _mensajesController = require("../controllers/mensajesController");

var router = (0, _express.Router)(); //router.get('/nuevo', productosController.nuevoForm);

router.get('/', _mensajesController.mensajesController.listar); //router.get('/listar/:id', mensajesConttroller.listarById);

router.post('/agregar', _mensajesController.mensajesController.agregar); //router.put('/actualizar/:id', mensajesConttroller.actualizar);
//router.delete('/borrar/:id',checkAdmin , mensajesConttroller.borrar);

var _default = router;
exports["default"] = _default;