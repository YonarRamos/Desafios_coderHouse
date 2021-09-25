"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Mongoose = require('mongoose');

var moment = require('moment');

var Config = require('../../../config');

var productsSchema = new Mongoose.Schema({
  timestamp: {
    type: Date,
    "default": moment().format(),
    required: true
  },
  codigo: {
    type: String,
    "default": Date.now(),
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});

var ProductosAtlasDAO = /*#__PURE__*/function () {
  function ProductosAtlasDAO(local) {
    (0, _classCallCheck2["default"])(this, ProductosAtlasDAO);

    if (local) {
      this.srv = "mongodb://localhost:27017/".concat(Config.MONGO_LOCAL_DBNAME);
      Mongoose.connect(this.srv);
      this.productos = Mongoose.model('productos', productsSchema);
      console.log('MONGO LOCAL CONNECTED');
    } else {
      this.srv = "mongodb+srv://".concat(Config.MONGO_ATLAS_USER, ":").concat(Config.MONGO_ATLAS_PASSWORD, "@").concat(Config.MONGO_ATLAS_CLUSTER, ".9xjxp.mongodb.net/").concat(Config.MONGO_ATLAS_DBNAME, "?retryWrites=true&w=majority");
      Mongoose.connect(this.srv);
      this.productos = Mongoose.model('productos', productsSchema);
      console.log('MONGO ATLAS CONNECTED');
    }
  }

  (0, _createClass2["default"])(ProductosAtlasDAO, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        var output, document;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                output = [];
                _context.prev = 1;

                if (!id) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return this.productos.findById(id);

              case 5:
                document = _context.sent;
                if (document) output.push(document);
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return this.productos.find();

              case 11:
                output = _context.sent;

              case 12:
                return _context.abrupt("return", output);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", _context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 15]]);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        var newProduct;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!data.name || !data.price || !data.stock || !data.description || !data.thumbnail)) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('invalid data');

              case 2:
                newProduct = new this.productos(data);
                _context2.next = 5;
                return newProduct.save();

              case 5:
                return _context2.abrupt("return", newProduct);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function add(_x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, newProductData) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.productos.findByIdAndUpdate(id, newProductData));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.productos.findByIdAndDelete(id);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ProductosAtlasDAO;
}();

module.exports = {
  ProductosAtlasDAO: ProductosAtlasDAO
};