
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'shockin', password: 'password', firstName: 'Sean', lastName: 'Hockin'},
        {username: 'tienabug', password: 'password', firstName: 'Tiena', lastName: 'West'},
        {username: 'test1', password: 'password1', firstName: 'Testy', lastName: 'McTesterson'},
        {username: 'sam', password: 'frodo', firstName: 'Sam', lastName: 'McJoe'}
      ]);
    });
};
