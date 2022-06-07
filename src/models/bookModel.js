const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    
    name:String,
    author_id:{type:Number,
        required:true},
    price:Number,
    ratings:Number,

}, { timestamps: true });


const authorSchema = new mongoose.Schema({

    
    author_id:{type:Number,
                required:true},
    author_name:{Type:String,//chetanBhagat
        },

    age:Number,
    address:String}

)


module.exports = mongoose.model('Book', bookSchema) //books
module.exports = mongoose.model('Author', authorSchema)//author
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
