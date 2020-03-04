const db = require('../data/dbConfig');

module.exports = {
    getRentals,
    getRentalBy,
    addRental,
    checkoutItem,
    getCategories
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

function getCategories() {
    return db('categories');
}

function checkoutItem(item) {
    return item;
}