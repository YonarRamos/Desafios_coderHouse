"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DBService = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _knex = _interopRequireDefault(require("knex"));

var _knexfile = _interopRequireDefault(require("../../knexfile"));

var DB = /*#__PURE__*/function () {
  function DB() {
    (0, _classCallCheck2["default"])(this, DB);
    var environment = process.env.NODE_ENV || 'production';
    var options = _knexfile["default"][environment];
    this.connection = (0, _knex["default"])(options);
  }

  (0, _createClass2["default"])(DB, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.connection.schema.hasTable('productos').then(function (exists) {
        if (exists) return;
        console.log('Creamos la tabla productos!');
        return _this.connection.schema.createTable("productos", function (productosTable) {
          productosTable.increments("id");
          productosTable.string("codigo").notNullable();
          productosTable.string("name").notNullable();
          productosTable.string("description").notNullable();
          productosTable.string("thumbnail").notNullable();
          productosTable.decimal("price", 4, 2).notNullable();
          productosTable.integer("stock");
          productosTable.timestamp("timestamp").defaultTo(_knex["default"].fn.now());
        });
      });
    }
  }, {
    key: "get",
    value: function get(tableName) {
      return this.connection(tableName);
    }
  }, {
    key: "getById",
    value: function getById(tableName, id) {
      if (id) return this.connection(tableName).where('id', id);
      return this.connection(tableName);
    }
  }, {
    key: "create",
    value: function create(tableName, data) {
      return this.connection(tableName).insert(data);
    }
  }, {
    key: "update",
    value: function update(tableName, id, data) {
      return this.connection(tableName).where('id', id).update(data);
    }
  }, {
    key: "delete",
    value: function _delete(tableName, id) {
      return this.connection(tableName).where('id', id).del();
    }
  }]);
  return DB;
}();

var DBService = new DB();
exports.DBService = DBService;