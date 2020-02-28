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

module.exports = router;