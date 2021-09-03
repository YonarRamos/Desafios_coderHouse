"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = require("../middleware/admin");

var _carritoController = _interopRequireDefault(require("../controllers/carritoController"));

var router = _express["default"].Router();

router.get('/listar/:id', _carritoController["default"].listarById);
router.post('/agregar/:id_producto', _admin.checkAdmin, _carritoController["default"].agregar);
router["delete"]('/borrar/:id_producto', _admin.checkAdmin, _carritoController["default"].borrar);
var _default = router;
exports["default"] = _default;