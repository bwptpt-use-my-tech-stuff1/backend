const router = require('express').Router();
const restricted = require('./protected-middleware');
const usersRouter = require('../users/usersRouter');
const rentalsRouter = require('../rentals/rentalsRouter');

// /api/protected
router.use(restricted);
router.use('/users', usersRouter);
router.use('/rentals', rentalsRouter);


module.exports = router;