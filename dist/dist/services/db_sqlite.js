"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SqliteDB = exports.sqliteDB = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _knex = _interopRequireDefault(require("knex"));

var _knexfile = _interopRequireDefault(require("../../knexfile"));

var sqliteDB = (0, _knex["default"])({
  client: 'sqlite3',
  connection: {
    filename: '../../db/mensajes.sqlite'
  },
  useNullAsDefault: true
});
exports.sqliteDB = sqliteDB;

var DB = /*#__PURE__*/function () {
  function DB() {
    (0, _classCallCheck2["default"])(this, DB);
    var environment = 'development';
    console.log("SETTING ".concat(environment, " DB"));
    var options = _knexfile["default"][environment];
    this.connection = (0, _knex["default"])(options);
  }

  (0, _createClass2["default"])(DB, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.connection.schema.hasTable('mensajes').then(function (exists) {
        if (exists) return;
        console.log('Creamos la tabla mensajes!');
        return _this.connection.schema.createTable('mensajes', function (table) {
          table.increments('id');
          table.string('user');
          table.string('msg');
          table.string("timestamp").defaultTo(Date.now());
        }).then(function () {
          console.log('DONE');
        });
      });
    }
    /*     get(tableName) {
          return this.connection(tableName);
        }
      
        getById(tableName, id) {
          if (id) return this.connection(tableName).where('id', id);
      
          return this.connection(tableName);
        }
      
        create(tableName, data) {
          return this.connection(tableName).insert(data);
        }
      
        update(tableName, id, data) {
          return this.connection(tableName).where('id', id).update(data);
        }
      
        delete(tableName, id) {
          return this.connection(tableName).where('id', id).del();
        }*/

  }]);
  return DB;
}();

var SqliteDB = new DB();
exports.SqliteDB = SqliteDB;