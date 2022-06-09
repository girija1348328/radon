const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    
    name:String,
    author_id:{type:Number,
},                   //Write create APIs for both books and authors ---> If author_id is not available then do not accept 
                                           //the entry(in neither the author collection nor the books collection)
    price:Number,
      ratings:Number,

}, { timestamps: true });





module.exports = mongoose.model('Book2', bookSchema) //books


