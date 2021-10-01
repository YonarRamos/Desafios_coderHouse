
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('productos').del()
    .then(function () {
      // Inserts seed entries
      return knex('productos')
    .insert([
        {
          "codigo":"1630176186406",
          "name":"Lapiz",
          "description":"lorem ipsum",
          "timestamp":"2021-08-28T15:54:54-03:00",
          "price":15,
          "thumbnail":"https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png",
          "stock":45
        },
        {
          "codigo":"1630176186407",
          "name":"Calculadora",
          "description":"lorem ipsum dolor",
          "timestamp":"2021-08-28T16:08:28-03:00",
          "price":10,
          "thumbnail":"https://cdn2.iconfinder.com/data/icons/draw-and-design/512/esquadra-2-256.png",
          "stock":60
      }
      ]);
    });
};
