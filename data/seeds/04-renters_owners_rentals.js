
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('renters_owners_rentals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('renters_owners_rentals').insert([
        {renter_id: 1, owner_id: 2, rental_id: 2, numDays: 3, price_per_day: 35, total_cost: 105},
        {renter_id: 2, owner_id: 1, rental_id: 1, numDays: 2, price_per_day: 75, total_cost: 150}
      ]);
    });
};
