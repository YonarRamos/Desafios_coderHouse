const knex = require('knex');
const dbConfig = require('../../knexfile');

class DB {
  constructor() {
    const environment = process.env.NODE_ENV || 'production';
    const options = dbConfig[environment];
    this.connection = knex(options);
  }

  init() {
    this.connection.schema.hasTable('productos').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla productos!');

      return this.connection.schema.createTable("productos", (productosTable) => {
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

  

  get(tableName) {
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
  }
}
const DBService = new DB();
module.exports =DBService;