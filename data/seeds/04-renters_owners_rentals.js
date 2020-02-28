
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('renters_owners_rentals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('renters_owners_rentals').insert([
        {renter_id: 1, owner_id: 2, rental_id: 2, start_time: new Date().toISOString(), end_time: new Date().toISOString(), cost: 35},
        {renter_id: 2, owner_id: 1, rental_id: 1, start_time: new Date().toISOString(), end_time: new Date().toISOString(), cost: 150}
      ]);
    });
};
