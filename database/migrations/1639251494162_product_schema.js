'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.integer('code').notNullable()
      table.string('name').notNullable()
      table.integer('price').notNullable()
      table.integer('stock').notNullable()
      table.string('description').notNullable()
      table.string('thumbnail').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
