"use strict";

var _Productos = _interopRequireDefault(require("../models/Productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productosController = {};

productosController.listar = function (req, res) {
  try {
    var pr = new _Productos["default"]();
    var productos = pr.show();
    res.json(productos); //res.render('index', {productos})
  } catch (error) {
    console.log('Listar Error:', error);
  }
};

productosController.listarById = function (req, res) {
  try {
    var id = req.params.id;
    var pr = new _Productos["default"]();
    var producto = pr.showOne(id);
    res.json(producto); // res.render('index', {productos})
  } catch (error) {
    console.log('Listar Error:', error);
    return res.status(404).json({
      msg: "Producto no encontrado"
    });
  }
};

productosController.agregar = function (req, res) {
  try {
    var body = req.body;
    var pr = new _Productos["default"]();
    pr.add(body);
    res.json({
      msg: "Producto agregado correctamente."
    });
  } catch (error) {
    console.log('POST Error:', error);
    return res.json({
      msg: "Error al agregar producto:".concat(error)
    });
  }
};

productosController.actualizar = function (req, res) {
  try {
    var id = req.params.id;
    var body = req.body;
    var pr = new _Productos["default"]();
    var producto = pr.edit(id, body);
    res.json({
      msg: "Producto ".concat(producto.id, " actualizado correctamente.")
    });
  } catch (error) {
    console.log('Update:', error);
    return res.json({
      msg: "Error al actualizar producto:".concat(error)
    });
  }
};

productosController.borrar = function (req, res) {
  try {
    var id = req.params.id;
    var pr = new _Productos["default"]();
    var producto = pr["delete"](id);
    res.json({
      msg: "Producto ".concat(producto.id, " eliminado correctamente.")
    });
  } catch (error) {
    console.log('Delete:', error);
    return res.json({
      msg: "Error al borrar producto:".concat(error)
    });
  }
};
/*productosController.nuevoForm = (req, res) => {
  try {
    res.render('nuevoForm')
  } catch (error) {
    console.log('POST Error:', error)
  }
}

*/


module.exports = productosController;