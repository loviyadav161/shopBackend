const router = require('express').Router();

//home
router.use('/home', require('./home.route'));
//cart
// router.use('/cart', require('./cart.route'));

module.exports = router;