const db = require('../data/dbConfig');

module.exports = {
    getRentals,
    getRentalBy,
    addRental,
    checkoutItem,
    getCategories,
    updateRental,
    deleteRental
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

async function updateRental(id, updates) {
    await db('rentals').where({id}).update(updates);

    return getRentalBy({id});
}

function deleteRental(id) {
    return db('rentals').del().where({id});
}