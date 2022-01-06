const { FactoryDAO } = require('../src/models/usuarios/users.factory');
const { TipoPersistencia } = require('../src/models/usuarios/users.factory');
const minimist = require('minimist');
const Config = require('../src/utils/config');
//const argv = minimist(process.argv.slice(2));
//console.log('minimist config:', argv.persistencia);

/* PERMITE SELECCIONAR EL TIPO DE PERSISTENCIA DESDE LA CONSOLA */
// let tipo = null;
// if( Config.NODE_ENV == 'development' ){
//   tipo = TipoPersistencia['MEMORIA'];
// } else {
//   tipo = TipoPersistencia['MONGO_ATLAS'];
// }

const tipo = TipoPersistencia['MONGO_ATLAS'];

class userAPIClass {

  constructor() {
    this.users = FactoryDAO.get(tipo);
  }

  async getUsers(req, res) {
    return this.users.get(req, res);
  }

  async loginUsers(req, res) {
    return this.users.login(req, res);
  }

  async addUsers(req, res){
    const newUsers = await this.users.add(req, res);
    return newUsers;
  }

  async updateUsers(req, res) {
    await this.users.update(req, res);
    return productData;
  }

  async deleteUsers(req, res) {
    await this.users.delete(req, res);
  }
}

const UsersAPI = new userAPIClass();
 
module.exports = { UsersAPI } ;
