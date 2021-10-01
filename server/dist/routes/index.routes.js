"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productosController = _interopRequireDefault(require("../controllers/productosController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/nuevo', _productosController["default"].nuevoForm);
router.get('/listar', _productosController["default"].listar);
router.post('/guardar', _productosController["default"].guardar);
/*
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

var _default = router;
exports["default"] = _default;