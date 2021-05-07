var express = require('express');
var router = express.Router();

var orders = require('../controllers/orders.controller')

router.get('/orders', orders.getAll);



module.exports = router;