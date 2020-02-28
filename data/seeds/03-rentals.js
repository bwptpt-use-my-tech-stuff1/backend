
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rentals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rentals').insert([
        {
          user_id: 1,
          title: 'Test',
          description: 'Test description',
          category_id: 2,
          checked_out: false,
          image: 'placeholder',
          price_hour: 30,
          price_day: 250,
          location: 'Salt Lake City, UT'
        },
        {
          user_id: 1,
          title: 'Camera',
          description: 'New Camera',
          category_id: 1,
          checked_out: false,
          image: 'placeholder',
          price_hour: 25,
          price_day: 150,
          location: 'Athens, GA'
        }
      ]);
    });
};
