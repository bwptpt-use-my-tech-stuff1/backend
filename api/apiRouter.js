const router = require('express').Router();
const authRouter = require('../auth/authRouter');
const protectedRouter = require('../protected/protectedRouter');

router.use('/auth', authRouter);
router.use('/protected', protectedRouter);

module.exports = router;