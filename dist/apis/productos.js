"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require('../src/models/products/products.factory'),
    newProductI = _require.newProductI,
    ProductI = _require.ProductI;

var _require2 = require('../src/models/products/products.factory'),
    NoticiasFactoryDAO = _require2.NoticiasFactoryDAO;

var _require3 = require('../src/models/products/products.factory'),
    TipoPersistencia = _require3.TipoPersistencia;

var _require4 = require('../src/routes/productos'),
    router = _require4["default"]; //const { ProductQuery } = require('../src/models/products/products.interface');

/**
 Con esta variable elegimos el tipo de persistencia
 */


var tipo = TipoPersistencia.Memoria;

var prodAPI = /*#__PURE__*/function () {
  function prodAPI() {
    (0, _classCallCheck2["default"])(this, prodAPI);
    this.productos = NoticiasFactoryDAO.get(tipo);
  }

  (0, _createClass2["default"])(prodAPI, [{
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!id) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.productos.get(id));

              case 2:
                return _context.abrupt("return", this.productos.get());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProducts(_x) {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "addProduct",
    value: function () {
      var _addProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(productData) {
        var newProduct;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.productos.add(productData);

              case 2:
                newProduct = _context2.sent;
                return _context2.abrupt("return", newProduct);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addProduct(_x2) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, productData) {
        var updatedProduct;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('from here:', productData);
                _context3.next = 3;
                return this.productos.update(id, productData);

              case 3:
                updatedProduct = _context3.sent;
                return _context3.abrupt("return", updatedProduct);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateProduct(_x3, _x4) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.productos["delete"](id);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteProduct(_x5) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(options) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.productos.query(options);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function query(_x6) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }]);
  return prodAPI;
}();

var productsAPI = new prodAPI();
module.exports = {
  productsAPI: productsAPI
};