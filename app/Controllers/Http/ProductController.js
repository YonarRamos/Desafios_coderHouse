'use strict'
const Product = use("App/Models/Product");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const { validate } = use('Validator');
/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    try {
      const { name, price, stock, description, thumbnail }= request.all();

      const rules = {
          name: 'required',
          price: 'required',
          stock: 'required',
          description:'required',
          thumbnail: 'required',
      };
      
      const validation = await validate({ name, price, stock, description, thumbnail }, rules);

      if (validation.fails()) {
        return response.status(404).json({ message: "Algunos campos no cumplen los requisitos" });
      } 
      else {
          const product = await Product.create({
            code:Date.now(),
            name,
            price,
            stock,
            description,
            thumbnail
          });
          return response.status(200).json(product);      
      };

    } catch (error) {
        console.log(error);
        response.status(404).json(error);
    }
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params:{ id }, request, response }) {
    try {
      //const user = await auth.getUser();
      const newProduct = request.all();
      //const validationPassword= await Hash.verify(actual_password, user.password);
      /* if (validationpassw == false) {
        return response.status(400).json({ menssage: 'Constraseña actual Incorrecta' })
      } */
      /* if (new_password != confirm_password) {
        return response.status(400).json({ menssage: 'Las contraseña no coinciden' })
      } */
      const currentProuct = await Product.findOrFail(id);
      currentProuct.merge({...newProduct});
      await currentProuct.save()
      return response.status(200).json({ menssage: 'Producto actualizado' });
    } catch (error) {
      console.log(error)
      return response.status(400).json({ menssage: 'Ha ocurrido un error', error:error });
    }
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {
    console.log('id delete:', id)
    //const user = await auth.getUser();
      try {
        const product = await Product.findOrFail(id);
        await product.delete();
        return response.status(200).json({ message: 'Producto borrado con exito!' });
      } catch (error) {
        console.log(error);
        return response.status(404).json({
          message: "Ha ocurrido un error",
          error
        });
      }
  }
}

module.exports = ProductController
