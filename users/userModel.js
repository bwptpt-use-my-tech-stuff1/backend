const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    addUser,
    getUserBy,
    getUserById,
    signInUser,
    updateUser,
    deleteUser
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

async function updateUser(id, changes) {
    await db('users').where({id}).update(changes);

    return getUserById(id);
}

function deleteUser(id) {
    return db('users').del().where({id});
}