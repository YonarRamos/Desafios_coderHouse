"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var knex = require('knex');

var dbConfig = require('../../../../knexfile');

var MysqlDB = /*#__PURE__*/function () {
  function MysqlDB(tableName) {
    (0, _classCallCheck2["default"])(this, MysqlDB);
    var environment = process.env.NODE_ENV || 'production';
    var options = dbConfig[environment];
    this.connection = knex(options);
    this.tableName = tableName;
  }

  (0, _createClass2["default"])(MysqlDB, [{
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
          productosTable.timestamp("timestamp").defaultTo(knex.fn.now());
        });
      });
    }
  }, {
    key: "get",
    value: function get(id) {
      if (id) return this.connection(this.tableName).where('id', id);
      return this.connection(this.tableName);
    }
  }, {
    key: "add",
    value: function add(data) {
      return this.connection(this.tableName).insert(data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return this.connection(this.tableName).where('id', id).update(data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.connection(this.tableName).where('id', id).del();
    }
  }]);
  return MysqlDB;
}();

module.exports = MysqlDB;