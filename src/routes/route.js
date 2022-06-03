const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const _ =require('lodash')


const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    
    const month = ['jan','feb','march','april','may','jun','july','aug','sep','oct','nov','dec']
    const chunk1=_.chunk(month,3)
    console.log(chunk1)

    const oddNum =[1,3,5,7,9,11,13,15,17,19]
    const tail = _.tail(oddNum)
    console.log(tail)
   res.send('Hello there!')

   const array1 = ['cuttack',"bbsr","baripada","knjr","jsp"]
   const array2 = ['cuttack',"barmunda","baripada","mbj","jsp"]
   const array3 = ['smlpr',"bbsr","baripada","knjr","jsp"]
   const array4 = ['hii',"bbsr","baripada","hello","jsp"]
   const array5 = ['who',"bbsr","am","knjr","i"]

   const result = _.unionBy(array1, array2, array3,array4,array5);
   const uniq1 = _.uniq(result)
   console.log(uniq1)

   let pairs = [['x', 1], ['y', 2], ['z', 3]]
   let obj = _.fromPairs(pairs);
   console.log(obj)
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason