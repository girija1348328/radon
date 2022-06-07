
const BookModel= require("../models/bookModel")


//createBook : to create a new entry..use this api to create 11+ entries in your
// collection

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//bookList : gives all the books- their bookName and authorName only
const getBooksData= async function (req, res){
    let allBooks= await BookModel.find().select({bookName:1,authorName:1,_id : 0})
    res.send({msg: allBooks})
  }

/*getBooksInYear: takes year as input in post request and gives list of all
 books published that year*/

 const getBooksInYear = async function (req,res){
     let publishingYear = req.body.year
    let allBooks = await BookModel.find({year:publishingYear})
   res.send({msg:allBooks})
 }

 /*getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
e.g if body had { name: “hi”} then you would fetch the books with this name
if body had { year: 2020} then you would fetch the books in this year
hence the condition will differ based on what you input in the request body*/

const getParticularBooks= async function (req,res){
    console.log(req.body)
    let output = await BookModel.find(req.body)
    res.send(output)
}

/*getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”*/ 
const getXINRBooks= async function (req,res){
    let allbooks = await BookModel.find({price:{$in:[100,200,500]} })
    res.send({msg:allbooks})
}

/*getRandomBooks - returns books that are available in stock or have more than 500 pages */
const getRandomBooks= async function (req,res)
{
    let allBooks = await BookModel.find({pages:{$gt:500} })
    res.send({msg:allBooks})
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks