const router = require('express').Router();
const homeController = require('../controllers/home.controller');

router.post('/product', homeController.allItems);

module.exports = router;