"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _faker = _interopRequireDefault(require("faker"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var productosFaker = /*#__PURE__*/function () {
  function productosFaker() {
    (0, _classCallCheck2["default"])(this, productosFaker);
    this.data = [];
  }

  (0, _createClass2["default"])(productosFaker, [{
    key: "findIndex",
    value: function findIndex(id) {
      return this.data.findIndex(function (aResource) {
        return aResource.id == id;
      });
    }
  }, {
    key: "get",
    value: function get(cant) {
      this.data = [];

      for (var i = 0; i < cant; i++) {
        var _author;

        this.data.push({
          author: (_author = {
            id: _faker["default"].internet.email(),
            nombre: _faker["default"].name.firstName()
          }, (0, _defineProperty2["default"])(_author, "nombre", _faker["default"].name.lastName()), (0, _defineProperty2["default"])(_author, "edad", _faker["default"].datatype.number()), (0, _defineProperty2["default"])(_author, "alias", _faker["default"].internet.userName()), (0, _defineProperty2["default"])(_author, "avatar", _faker["default"].internet.avatar()), _author),
          message: {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            timestamp: _faker["default"].date.recent()
          }
        });
      }

      return this.data;
    }
  }, {
    key: "post",
    value: function post() {
      var _author2;

      this.data.push({
        author: (_author2 = {
          id: _faker["default"].internet.email(),
          nombre: _faker["default"].name.firstName()
        }, (0, _defineProperty2["default"])(_author2, "nombre", _faker["default"].name.lastName()), (0, _defineProperty2["default"])(_author2, "edad", _faker["default"].datatype.number()), (0, _defineProperty2["default"])(_author2, "alias", _faker["default"].internet.userName()), (0, _defineProperty2["default"])(_author2, "avatar", _faker["default"].internet.avatar()), _author2),
        message: {
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          timestamp: _faker["default"].date.recent()
        }
      });
    }
  }, {
    key: "put",
    value: function put(id, data) {
      var index = this.findIndex(id);
      var recursoViejo = this.data[index];

      var recursoNuevo = _objectSpread({
        id: id
      }, data);

      var recursoActualizado = _objectSpread(_objectSpread({}, recursoViejo), recursoNuevo); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#syntax


      this.data.splice(index, 1, recursoActualizado);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var index = this.findIndex(id);
      this.data.splice(index, 1);
    }
  }]);
  return productosFaker;
}();

var fakeProducts = new productosFaker();
module.exports = fakeProducts;