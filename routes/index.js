var express = require('express');
var router = express.Router();
var user = require('../src/data/user')

/* GET users listing. */
router.use('/user', user);

module.exports = router;
