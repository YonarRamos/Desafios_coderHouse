const { UsersAPI } = require('../../apis/usuarios');

class Users {

  async getUsers(req, res) {
    const result = await UsersAPI.getUsers(req, res);
      return res.json(result);        
  }
  async addUsers(req , res ) {
    const newItem = await UsersAPI.addUsers(req, res);
    return res.json(newItem);   
  }
  async updateUsers(req , res) {
    const updatedItem = await UsersAPI.updateUser(req , res);
    return res.json(updatedItem);
  }
  async deleteUsers(req, res) {
    const deletedItem = await UsersAPI.deleteUser(req , res);
    res.json(deletedItem);
  }
  async loginUsers(req, res) {
    const loggedUser = await UsersAPI.loginUsers(req , res);
    res.json(loggedUser);
  }
}
const usuariosController = new Users();
module.exports = { usuariosController }