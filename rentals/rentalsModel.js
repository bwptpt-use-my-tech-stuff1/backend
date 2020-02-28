const db = require('../data/dbConfig');

module.exports = {
    getRentals,
    getRentalBy,
    addRental
}

function getRentals() {
    return db('rentals');
}

function getRentalBy(filter) {
    return db('rentals').where(filter);
}

async function addRental(newRental) {
    const [id] = await db('rentals').insert(newRental, 'id');

    return getRentalBy({id});
}