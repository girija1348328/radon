const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    
    name:String,
    author_id:{type:Number,
        required:true},                   //Write create APIs for both books and authors ---> If author_id is not available then do not accept 
                                           //the entry(in neither the author collection nor the books collection)price:Number
      ratings:Number,

}, { timestamps: true });





module.exports = mongoose.model('Book2', bookSchema) //books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
