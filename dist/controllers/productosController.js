"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productosController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../services/db");

var _productos = _interopRequireDefault(require("../models/productos.js"));

var _productos2 = require("../../apis/productos");

var _products = require("../models/products/products.interface");

var tableName = 'productos';

var Products = /*#__PURE__*/function () {
  function Products() {
    (0, _classCallCheck2["default"])(this, Products);
  }

  (0, _createClass2["default"])(Products, [{
    key: "checkAddProducts",
    value: function checkAddProducts(req, res, next) {
      var _req$body = req.body,
          nombre = _req$body.nombre,
          precio = _req$body.precio,
          stock = _req$body.stock,
          description = _req$body.description,
          thumbnail = _req$body.thumbnail;

      if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio) || !stock || isNaN(stock) || !description || typeof description !== 'string' || !thumbnail || typeof thumbnail !== 'string') {
        return res.status(400).json({
          msg: 'Campos del body invalidos'
        });
      }

      next();
    }
  }, {
    key: "checkProductExists",
    value: function () {
      var _checkProductExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var id, producto;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.params.id;
                _context.next = 3;
                return _productos2.productsAPI.getProducts(id);

              case 3:
                producto = _context.sent;

                if (producto) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  msg: 'producto not found'
                }));

              case 6:
                next();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkProductExists(_x, _x2, _x3) {
        return _checkProductExists.apply(this, arguments);
      }

      return checkProductExists;
    }()
  }, {
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, _req$query, nombre, precio, result, query;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                _req$query = req.query, nombre = _req$query.nombre, precio = _req$query.precio;

                if (!id) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 5;
                return _productos2.productsAPI.getProducts(id);

              case 5:
                result = _context2.sent;

                if (result.length) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  data: 'objeto no encontrado'
                }));

              case 8:
                return _context2.abrupt("return", res.json({
                  data: result
                }));

              case 9:
                query = {};
                if (nombre) query.nombre = nombre.toString();
                if (precio) query.precio = Number(precio);

                if (!Object.keys(query).length) {
                  _context2.next = 19;
                  break;
                }

                _context2.t0 = res;
                _context2.next = 16;
                return _productos2.productsAPI.query(query);

              case 16:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  data: _context2.t1
                };
                return _context2.abrupt("return", _context2.t0.json.call(_context2.t0, _context2.t2));

              case 19:
                _context2.t3 = res;
                _context2.next = 22;
                return _productos2.productsAPI.getProducts();

              case 22:
                _context2.t4 = _context2.sent;
                _context2.t5 = {
                  data: _context2.t4
                };

                _context2.t3.json.call(_context2.t3, _context2.t5);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getProducts(_x4, _x5) {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "addProducts",
    value: function () {
      var _addProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var newItem;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _productos2.productsAPI.addProduct(req.body);

              case 2:
                newItem = _context3.sent;
                res.json({
                  msg: 'producto agregado con exito',
                  data: newItem
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addProducts(_x6, _x7) {
        return _addProducts.apply(this, arguments);
      }

      return addProducts;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, productData) {
        var updatedProduct;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.productos.update(id, productData);

              case 2:
                updatedProduct = _context4.sent;
                return _context4.abrupt("return", updatedProduct);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateProduct(_x8, _x9) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.productos["delete"](id);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteProduct(_x10) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(options) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.productos.query(options);

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function query(_x11) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
    /*  async listar(req, res) {
       try {
         const items = await productos.find();
         console.log(items);
         if(items.length == 0){
           return res.status(404).json({
             msg: 'No hay productos cargados.'
           })
         }else{
           res.json({
             data: items,
           });      
         }
       } catch (error) {
         console.error('Listar Error:', error)
       }
     }
    
     async listarById(req, res) {
       const { id } = req.params;
       const item = await productos.find({_id : id});
    
       if (item.length == 0) {
         return res.status(404).json({
           msg: 'Producto no encontrado',
         });      
       }else{
         res.json({
           data: item,
         });
       }
     }
    
     async agregar(req, res) {
       const { name, description, stock, price, thumbnail } = req.body;
    
       if ( !name ||  !description || !stock || !price || !thumbnail )
         return res.status(400).json({
           msg: 'missing Body fields',
         });
    
       const data = {
         name,
         description,
         stock,
         price,
         thumbnail,
       };
    
       await productos.insertMany([data]).then((producto)=>{
         res.json({
           msg:"Producto agregado",
           data: producto,
         });      
       })
    
     }
    
     async actualizar(req, res) {
       const { id } = req.params;
       const { name, description, stock, price, thumbnail } = req.body;
       
       if ( !name ||  !description || !stock || !price || !thumbnail ){
         return res.status(400).json({
           msg: 'missing Body fields',
         });     
       }
         const data = {
           name,
           description,
           stock,
           price,
           thumbnail,
         };
         console.log('update', data)
       await productos.findOneAndUpdate({_id : id}, data, { new: true }).then((producto) => {
         res.json({
           msg: 'Producto Actualizado',
           producto,
         });      
       })
     }
    
     async borrar(req, res) {
       try {
         const { id } = req.params;   
         await productos.remove({_id : id}).then((producto)=>{
             res.json({ 
             msg: 'Producto eliminado',
             data: producto
           });
         });
    
    
       } catch (error) {
         res.json({
           msg: 'Error al eliminar producto',
         });      
       }
       
    
    
    
     } */

  }]);
  return Products;
}();

var productosController = new Products();
exports.productosController = productosController;