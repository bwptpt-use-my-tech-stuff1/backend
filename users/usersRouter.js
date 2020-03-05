const router = require('express').Router();
const Users = require('./userModel');

// /api/protected/users
router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({message: `A server error occured getting users: ${err}`}));
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Users.getUserById(id)
        .then(foundUser => {
            if(!foundUser) {
                res.status(404).json({message: 'No user found with that id'});
            } else {
                res.status(200).json(foundUser);
            }
        })
        .catch(err => res.status(500).json({message: 'A server error occured looking up user'}));
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Users.updateUser(id, changes)
        .then(updatedUser => {
            updatedUser ? res.status(200).json(updatedUser) : res.status(404).json({message: `No user with the id #${id} exists.`})
        })
        .catch(err => res.status(500).json({message: `A server error occured when updating user: ${err}`}))
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Users.deleteUser(id)
        .then(numDel => {
            numDel === 1 ? res.status(200).json({message: 'User deleted successfully'}) : res.status(400).json({message: 'User does not exist'});
        })
        .catch(err => res.status(500).json({message: `A server error occured deleting user: ${err}`}))
})

module.exports = router;