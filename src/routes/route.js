const express = require('express');
const router = express.Router();
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const formatter=require('../validator/formatter.js')
const _ = require('lodash') 

router.get('/test-me', function (req, res) {
    let _ = require("lodash");
    let months=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];
    //  console.log('My batch is', abc.name)
    // console.log(logger.book)
    console.log(_.chunk(months, 3));
    let arr=[1,3,5,7,9,11,13,15,17,19];
    let result=_.tail(arr);
    console.log(result);
    res.send('My second ever api!')
    let dublicate=[1,2,3,3,1];
    let showing=_.union(dublicate);
    console.log(showing);
    let show=[['horror','The Shining'],[ 'drama' ,'Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    let object=_.fromPairs(show);
    console.log(object);


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