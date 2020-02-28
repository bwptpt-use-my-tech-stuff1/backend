const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    addUser,
    getUserBy,
    getUserById,
    signInUser
}

function getUsers() {
    return db('users').select('id', 'username', 'firstName', 'lastName');
}

async function signInUser(username) {
    return db('users').where({username}).first();
}

async function addUser(user) {
    const [id] = await db('users').insert(user);

    return getUserBy({id});
    
}

async function getUserBy(filter) {
    return db('users').select('id', 'username', 'firstName', 'lastName').where(filter);
}

function getUserById(id) {
    return db('users').select('id', 'username', 'firstName', 'lastName').where({id}).first();
}