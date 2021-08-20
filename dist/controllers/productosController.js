"use strict";

var _Productos = _interopRequireDefault(require("../models/Productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productosController = {};

productosController.listar = function (req, res) {
  try {
    var pr = new _Productos["default"]();
    var productos = pr.show();
    res.render('index', {
      productos: productos
    });
  } catch (error) {
    console.log('Listar Error:', error);
  }
};

productosController.nuevoForm = function (req, res) {
  try {
    res.render('nuevoForm');
  } catch (error) {
    console.log('POST Error:', error);
  }
};

productosController.guardar = function (data) {
  try {
    var pr = new _Productos["default"]();
    pr.add(data);
  } catch (error) {
    console.log('POST Error:', error);
  }
};

module.exports = productosController;