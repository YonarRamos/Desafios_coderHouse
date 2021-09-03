import knex from 'knex';
import sqliteDB_conf from '../../knexfile';

export const sqliteDB = knex({
  client: 'sqlite3',
  connection: { filename: '../../db/mensajes.sqlite' },
  useNullAsDefault: true,
});

  class DB {
    constructor() {
      const environment = 'development';
      console.log(`SETTING ${environment} DB`);
      const options = sqliteDB_conf[environment];
      this.connection = knex(options);
    }
  
    init() {
      this.connection.schema.hasTable('mensajes').then((exists) => {
        if (exists) return;
        console.log('Creamos la tabla mensajes!');
  
        return this.connection.schema.createTable('mensajes', (table) => {
          table.increments('id');
          table.string('user');
          table.string('msg');
          table.string("timestamp").defaultTo(Date.now());
        })
        .then(() => {
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
  } 
  
  export const SqliteDB = new DB();