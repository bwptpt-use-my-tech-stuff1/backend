
exports.up = function(knex) {
  return knex.schema
    .createTable('categories', tbl => {
        tbl.increments()
        tbl.string('name').notNullable().unique();
    })
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128).notNullable().unique();
        tbl.string('password', 255).notNullable();
        tbl.string('firstName', 255).notNullable();
        tbl.string('lastName', 255).notNullable();
    })
    .createTable('rentals', tbl => {
        tbl.increments();
        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('title', 255).notNullable();
        tbl.string('description', 1024).notNullable();
        tbl.integer('category_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('categories')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.boolean('checked_out')
            .notNullable()
        tbl.string('image', 255).notNullable();
        tbl.integer('price_hour').notNullable();
        tbl.integer('price_day').notNullable();
        tbl.string('location', 255).notNullable();
    })
    .createTable('renters_owners_rentals', tbl => {
        tbl.increments();
        tbl.integer('renter_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.integer('owner_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.integer('rental_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('rentals')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.datetime('start_time').notNullable()
        tbl.datetime('end_time').notNullable();
        tbl.integer('cost').notNullable();
      })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('renters_owners_rentals')
    .dropTableIfExists('rentals')
    .dropTableIfExists('users')
    .dropTableIfExists('categories')
};
