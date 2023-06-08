// First import express module:
const express = require('express');
// express.Router() inbulit module in express:
const router = express.Router();
const homeController = require('../controllers/home_controller');



console.log('router loaded');


router.get('/', homeController.home);

// for any further routes, access from here
// router.use('/routerName', require('./routerfile'));

router.use('/users', require('./users'));
router.use('/about', require('./about'));




module.exports = router;