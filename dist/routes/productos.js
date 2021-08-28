"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = require("../middleware/admin");

var _productosController = _interopRequireDefault(require("../controllers/productosController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); //router.get('/nuevo', productosController.nuevoForm);


router.get('/listar', _productosController["default"].listar);
router.get('/listar/:id', _productosController["default"].listarById);
router.post('/agregar', _admin.checkAdmin, _productosController["default"].agregar);
router.put('/actualizar/:id', _admin.checkAdmin, _productosController["default"].actualizar);
router["delete"]('/borrar/:id', _admin.checkAdmin, _productosController["default"].borrar);
var _default = router;
exports["default"] = _default;