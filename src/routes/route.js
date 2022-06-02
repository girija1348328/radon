const express = require('express');
const externalModule1 = require('../loggers/loggers')
const externalModule2 = require('../util/helper')
const externalModule3 = require('../validator/formattor')
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule1.func1()
    externalModule2.printDate()
    externalModule2.printMonth()
    externalModule2.getBatchInfo()
    externalModule3.trim123()
    externalModule3.changetoLowerCase()
    externalModule3.changetoUpperCase()
    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason