'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('user', 'UserController.index');
  Route.post("user", "UserController.create");
  Route.put("user/:id", "UserController.update");
  Route.delete("user/:id", "UserController.destroy");
}).prefix('api/v1/');

Route.group(() => {
  Route.get("product", "ProductController.index");
  Route.post("product", "ProductController.create");
  Route.put("product/:id", "ProductController.update");
  Route.delete("product/:id", "ProductController.destroy");
}).prefix('api/v1/');