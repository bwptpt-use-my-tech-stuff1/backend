const router = require('express').Router();
const Users = require('../users/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

// /api/auth/register
router.post('/register', (req, res) => {
    let {username, password, firstName, lastName} = req.body;

    if(!username || !password || !firstName || !lastName) {
        res.status(400).json({message: 'Please make sure all required fields are submitted.'})
    } else {
        password = bcrypt.hashSync(password, 10);
        Users.addUser({username, password, firstName, lastName})
            .then(user => {
                [user] = user;
                res.status(201).json(user)
            })
            .catch(err => res.status(500).json({message: `A server error occured registering user: ${err}`}))
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        res.status(400).json({message: 'Please make sure all required fields are submitted.'})
    } else {
        Users.signInUser(username)
            .then(foundUser => {
                if(!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
                    res.status(401).json({message: 'Invalid credentials'});
                } else {
                    const token = genToken(foundUser);
                    res.status(200).json({
                        success: true,
                        token: token
                    })
                }
            })
    }
})

function genToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    };

    return jwt.sign(payload, secrets.jwtSecret, {expiresIn: '4h'});
}

module.exports = router;