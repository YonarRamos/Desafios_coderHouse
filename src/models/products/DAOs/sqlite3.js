const knex = require('knex');
const moment = require('moment');
const path = require('path');

const sqlite3DB = knex({
  client: 'sqlite3',
  connection: { filename: path.resolve(__dirname, '../../../../db/ecommerce')},
  useNullAsDefault: true,
});

(function init() {
    sqlite3DB.schema.hasTable('productos').then((exists) => {
      if (!exists) {      
        console.log('Creando la tabla productos!');    
          return sqlite3DB.schema.createTable('productos', (table) => {
            table.increments('id');
            table.string('name');
            table.decimal('price')
            table.string('description');
            table.string('thumbnail');
            table.integer('stock');
            table.string("codigo").defaultTo(Date.now());
            table.string("timestamp").defaultTo(moment().format());
          })
          .then(() => {
            console.log('DONE');
          });
      }
    });
  })();

  class SqliteDB {
    constructor(tableName) {
      this.connection = sqlite3DB;
      this.tableName = tableName;
    }
  
    get(id) {
      if (id) return this.connection(this.tableName).where('id', id);
  
      return this.connection(this.tableName);
    }
  
    add(data) {
      return this.connection(this.tableName).insert(data);
    }
  
    update(id, data) {
      return this.connection(this.tableName).where('id', id).update(data);
    }
  
    delete(id) {
      return this.connection(this.tableName).where('id', id).del();
    }
  };

//Agregamos datos de prueba
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