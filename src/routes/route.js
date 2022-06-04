const { response } = require('express');
const express = require('express');
const externalModule1 = require('../loggers/loggers')
const externalModule2 = require('../util/helper')
const externalModule3 = require('../validator/formattor')
const router = express.Router();


//1.Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get("/movies",function(req,res){

    const array1 = ['dilwale','kgf','rrr','wanted','zindegi n milegi dubra']
     
    res.send(array1)
})

/*2.Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie 
in your array at index 1). You can define an array of movies again in your api

3.Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that 
tells the user to use a valid index in an error message.*/

router.get("/movies/:indexNumber",function(req,res){

    const array2 = ['dilwale','kgf','rrr','wanted','zindegi n milegi dubra']
    let new_mov_index = req.params.indexNumber
    if(new_mov_index>array2.length)
    {
        res.send("no such movies exist")
    }
    res.send(array2[new_mov_index])




})

/*4.Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
 Each movie object should have values - id, name. An example of movies array is */



router.get("/films",function(req,res){

   const array4= [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
       
       
     
    res.send(array4)
})

/*5.
Write api GET /films/:filmId where filmId is the value received in request path params. 
Use this value to return a movie object with this id. In case there is no such movie present in the array,
 return a suitable message in the response body. Example for a request GET /films/3 should return the movie object */

router.get("/films/:filmId",function(req,res){

    const array4= [ {
         id: 1,
         name: 'The Shining'
        }, {
         id: 2,
         name: 'Incendies'
        }, {
         id: 3,
         name: 'Rang de Basanti'
        }, {
         id: 4,
         name: 'Finding Nemo'
        }]
        
      let id = req.params.filmId
      if(array4.length<id || array4.length===0)

      {
        res.send("no such movies exist")
      }
      else{
        res.send(array4[id-1])
      }
      
     
 })


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