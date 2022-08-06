const express = require('express');
const router = express.Router();
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const formatter=require('../validator/formatter.js')


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    console.log(logger.book)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    console.log(helper.pen)
    res.send('This is the second routes implementation')
});

router.get('/give-me-students-data',function(req, res){
    console.log(formatter.pencil)
    res.send('this is my third routrs')

});
module.exports = router;
// adding this comment for no reason