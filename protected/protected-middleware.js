const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
        res.status(403).json({message: 'For shame! You did not pass a token!'});
    } else {
        jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
            if(err) {
                res.status(500).json({message: 'There was an error with your token'});
            } else {
                req.decoded = decoded;
                next();
            }
        })
    }
}