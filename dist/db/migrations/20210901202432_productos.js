"use strict";

exports.up = function (knex) {
  return knex.schema.createTable("productos", function (productosTable) {
    productosTable.increments("id");
    productosTable.string("codigo").notNullable();
    productosTable.string("name").notNullable();
    productosTable.string("description").notNullable();
    productosTable.string("thumbnail").notNullable();
    productosTable.decimal("price", 4, 2).notNullable();
    productosTable.integer("stock");
    productosTable.timestamp("timestamp").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("productos");
};