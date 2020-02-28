
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {name: 'Camera'},
        {name: 'TV'},
        {name: 'Instrument'},
        {name: 'Party'},
        {name: 'Other'}
      ]);
    });
};
