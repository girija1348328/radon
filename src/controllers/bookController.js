//const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/AuthorModel")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let authorId = data.author_id
    if(!authorId) return res.send({msg:"author_id is most required"})
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const AuthorModel2= async function (req, res) {
    let data= req.body
    let authorId = data.author_id
    if(!authorId) return res.send({msg:"author_id is most required"})
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getBooksChetanBhagat= async function (req, res) {

    let data = await AuthorModel.find({author_name:"Chetan Bhagat"}).select({author_id :1,_id:0})
    let value1 = data[0].author_id
    //console.log(value1)
    let bookData = await BookModel.find({author_id:value1}).select({name:1,_id:0})

    res.send({msg:bookData})
}

const getAuthorOfBook =async function(req,res){
        let allBooks= await BookModel.findOneAndUpdate( { name : "Two States"  },{$set:{prices:100}},{new:true} )
        //console.log(allBooks)
        let bookData = await AuthorModel.find({author_id:allBooks.author_id}).select({author_name:1})
        let price = bookData.prices
        res.send({msg:authorData,prices})

    }

const getByCostBooks = async function(req,res)
{
    let myarray =[]
    let data = await bookModel.find({price:{$gte:50,$lte:100} }).select({author_id:1,name:1,_id:0});
    console.log(data)
    let data2 = await AuthorModel.find().select({author_name:1,author_id:1,_id:0})
    
    for(let i=0;i<data.length;i++)
    {
        for(let j=0;j<data2.length;j++)
        {
            if(data[i].author_id===data2[j].author_id)
            {
                myarray.push(data2[j].author_name,data[i].name)
                break;
            }
        }
        
    }
    res.send({msg:myarray})
}

//Write an api GET /books-by-authorid/<Author_Id> (for example /books/1 or /books/2 etc) that returns all the books written
 //by the author with an id <Author_Id>. Only return the names of these books

 const books_by_authorid = async function(req,res){
    
    let new_index = req.params.indexNumber
    let data3 = await AuthorModel.find({author_id:new_index}).select({author_name:1})
    let data4 = await bookModel.find({author_id:data3.author_id}).select({name:1})

 }


module.exports.getBooksChetanBhagat= getBooksChetanBhagat
module.exports.createBook= createBook
module.exports.getAuthorOfBook= getAuthorOfBook
module.exports.AuthorModel2=AuthorModel2
module.exports.getByCostBooks=getByCostBooks
module.exports.books_by_authorid=books_by_authorid




//Find a list of authors whose are older than 50 years of age with at least one book that has a rating greater than 4. 
//Only include the author’s names and their ages in the response for this api





    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
   /* let a= 2+4
    a= a + 10
    console.log(a)
    let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    console.log(allBooks)
    let b = 14
    b= b+ 10
    console.log(b)
    res.send({msg: allBooks})
}
*/




