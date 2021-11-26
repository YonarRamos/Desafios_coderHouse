const knex =  require('knex');
const dbConfig = require('../../../../knexfile');

class MysqlDB {
  constructor(tableName) {
    const environment = process.env.NODE_ENV || 'production';
    const options = dbConfig[environment];
    this.connection = knex(options);
    this.tableName = tableName;
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

  get(req, res) {
    const { id } = req.query;
    let result = [];
    if (id) {
      result =  this.connection(this.tableName).where('id', id);
    } else {
      result = this.connection(this.tableName);
    }
    return result;
  }

/*   add(data) {
    return this.connection(this.tableName).insert(data);
  }

  update(id, data) {
    return this.connection(this.tableName).where('id', id).update(data);
  }

  delete(id) {
    return this.connection(this.tableName).where('id', id).del();
  } */
}

module.exports =  MysqlDB ;