const router = require('express').Router();
const userRoutes = require('./api/user.route');

router.use('/user', userRoutes);

module.exports = router;