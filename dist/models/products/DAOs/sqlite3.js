"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var knex = require('knex');

var moment = require('moment');

var path = require('path');

var sqlite3DB = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../../../../db/ecommerce')
  },
  useNullAsDefault: true
});

(function init() {
  sqlite3DB.schema.hasTable('productos').then(function (exists) {
    if (!exists) {
      console.log('Creando la tabla productos!');
      return sqlite3DB.schema.createTable('productos', function (table) {
        table.increments('id');
        table.string('name');
        table.decimal('price');
        table.string('description');
        table.string('thumbnail');
        table.integer('stock');
        table.string("codigo").defaultTo(Date.now());
        table.string("timestamp").defaultTo(moment().format());
      }).then(function () {
        console.log('DONE');
      });
    }
  });
})();

var SqliteDB = /*#__PURE__*/function () {
  function SqliteDB(tableName) {
    (0, _classCallCheck2["default"])(this, SqliteDB);
    this.connection = sqlite3DB;
    this.tableName = tableName;
  }

  (0, _createClass2["default"])(SqliteDB, [{
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
  return SqliteDB;
}();

; //Agregamos datos de prueba

/*   sqlite3DB('productos').insert({
    "codigo":"1630176186406",
    "name":"Calculadora",
    "description":"lorem ipsum",
    "timestamp":"2021-08-28T15:54:54-03:00",
    "price":15,
    "thumbnail":"https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png",
    "stock":45
  }).then((data)=> {
      console.log('PRODUCTOS AGREGADOS', data);
  }).catch((err)=>{
    console.log('PRODUCTOS NO AGREGADOS', err);
  }) */

module.exports = SqliteDB;