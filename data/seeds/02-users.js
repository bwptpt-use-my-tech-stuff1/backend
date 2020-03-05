const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'test',
          password: bcrypt.hashSync('test', 10),
          firstName: 'test',
          lastName: 'test'
        },
        {
          username: 'test2',
          password: bcrypt.hashSync('test', 10),
          firstName: 'test2',
          lastName: 'test2'
        },
        {
          username: 'shockin',
          password: bcrypt.hashSync('password', 10),
          firstName: 'Sean',
          lastName: 'Hockin'
        },
        {
          username: 'sbirmingham',
          password: bcrypt.hashSync('password', 10),
          firstName: 'Sean',
          lastName: 'Birmingham'
        }
      ]);
    });
};
