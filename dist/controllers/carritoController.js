"use strict";

var _Carrito = _interopRequireDefault(require("../models/Carrito"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var carritoController = {};

carritoController.listarById = function (req, res) {
  try {
    var id = req.params.id;
    var cart = new _Carrito["default"]();
    var carrito = cart.showOne(id);
    res.json(carrito); // res.render('index', {productos})
  } catch (error) {
    console.log('Listar Error:', error);
    return res.status(404).json({
      msg: "El carrito indicado no existe"
    });
  }
};

carritoController.agregar = function (req, res) {
  try {
    var id_producto = req.params.id_producto;
    var car = new _Carrito["default"]();
    car.add(id_producto);
    res.json({
      msg: "Producto ".concat(id_producto, " agregado al carrito ")
    });
  } catch (error) {
    console.log('POST Error:', error);
    return res.status(400).json({
      msg: "Error al agregar producto al carrito:".concat(error)
    });
  }
};

carritoController.borrar = function (req, res) {
  try {
    var id = req.params.id_producto;
    var car = new _Carrito["default"]();
    var carrito = car["delete"](id);
    res.json({
      msg: "Producto ".concat(id, " eliminado del carrito."),
      carrito: carrito
    });
  } catch (error) {
    console.log('Delete:', error);
    return res.json({
      msg: "Error al borrar producto del carrito:".concat(error)
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


module.exports = carritoController;