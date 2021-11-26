"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require('../../apis/productos'),
    productsAPI = _require.productsAPI;

var Products = /*#__PURE__*/function () {
  function Products() {
    (0, _classCallCheck2["default"])(this, Products);
  }

  (0, _createClass2["default"])(Products, [{
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return productsAPI.getProducts(req, res);

              case 2:
                result = _context.sent;
                return _context.abrupt("return", res.json(result));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getProducts(_x, _x2) {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "addProducts",
    value: function () {
      var _addProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newItem;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return productsAPI.addProduct(req, res);

              case 2:
                newItem = _context2.sent;
                return _context2.abrupt("return", res.json(newItem));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addProducts(_x3, _x4) {
        return _addProducts.apply(this, arguments);
      }

      return addProducts;
    }()
  }, {
    key: "updateProducts",
    value: function () {
      var _updateProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var updatedItem;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return productsAPI.updateProduct(req, res);

              case 2:
                updatedItem = _context3.sent;
                return _context3.abrupt("return", res.json(updatedItem));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateProducts(_x5, _x6) {
        return _updateProducts.apply(this, arguments);
      }

      return updateProducts;
    }()
  }, {
    key: "deleteProducts",
    value: function () {
      var _deleteProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var deletedItem;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return productsAPI.deleteProduct(req, res);

              case 2:
                deletedItem = _context4.sent;
                res.json(deletedItem);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteProducts(_x7, _x8) {
        return _deleteProducts.apply(this, arguments);
      }

      return deleteProducts;
    }()
  }]);
  return Products;
}();

var productosController = new Products();
module.exports = {
  productosController: productosController
};