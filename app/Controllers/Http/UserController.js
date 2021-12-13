'use strict'
const User = use("App/Models/User");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const { validate } = use('Validator');
const Hash = use('Hash');
/**
 * Resourceful controller for interacting with usuarios
 */
class UserController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const { id } = request.only(['id']);

       if(id) {
        const user = await User.find(id);
        return response.status(200).json(user);
       };

       const users = await User.all();
       response.status(200).json({ message: 'List Users', data: users });
     } catch (error) {
       console.log(error)
       response.status(404).json({ message: 'Hubo un error al realizar la operación', error });
     }
  }

  /**
   * Render a form to be used for creating a new usuario.
   * GET usuarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    try {
      const { nombre, apellido, edad, telefono, alias, email, password, confirmPassword } = request.all();

      //Validacion de campos para generar usuarios
      //email requerido y unico; password requerido; rol requerido y numerico
      const rules = {
          nombre: 'required',
          apellido: 'required',
          edad: 'required',
          telefono: 'required',
          alias:'required',
          email: 'required',
          password: 'required'
      }
      const validation = await validate({ nombre, apellido, edad, telefono, alias, email, password, confirmPassword }, rules)
      if (validation.fails()) {
        return response.status(404).json({ message: "Algunos campos no cumplen los requisitos" });
      } else if(password != confirmPassword){
        return response.status(404).json({ message: "Las contraseñas indicadas no coinciden" });
      } else {
          const user = await User.create({
            nombre,
            apellido,
            edad,
            telefono,
            alias,
            email,
            password
          });
          return response.status(200).json(user)       
      }
    } catch (error) {
        console.log(error);
        response.status(404).json(error);
    }
  }

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing usuario.
   * GET usuarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params:{ id }, request, response }) {
    try {
      //const user = await auth.getUser();
      const newUser = request.all();
      //const validationPassword= await Hash.verify(actual_password, user.password);
      /* if (validationpassw == false) {
        return response.status(400).json({ menssage: 'Constraseña actual Incorrecta' })
      } */
      /* if (new_password != confirm_password) {
        return response.status(400).json({ menssage: 'Las contraseña no coinciden' })
      } */
      const currentUser = await User.findOrFail(id);
      currentUser.merge({...newUser});
      await currentUser.save()
      return response.status(200).json({ menssage: 'Usuario actualizado' });
    } catch (error) {
      console.log(error)
      return response.status(400).json({ menssage: 'Ha ocurrido un error', error:error });
    }
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {

    console.log('id delete:', id)
    //const user = await auth.getUser();
      try {
        const code = await User.findOrFail(id);
        await code.delete();
        return response.status(200).json({ message: 'Usuario borrado con exito!' });
      } catch (error) {
        console.log(error);
        return response.status(404).json({
          message: "Ha ocurrido un error",
          error
        });
      }

  }
}

module.exports = UserController
