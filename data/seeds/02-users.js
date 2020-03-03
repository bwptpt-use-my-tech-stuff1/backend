
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'test',
          password: 'test',
          firstName: 'test',
          lastName: 'test'
        },
        {
          username: 'test2',
          password: 'test2',
          firstName: 'test2',
          lastName: 'test2'
        }
      ]);
    });
};
