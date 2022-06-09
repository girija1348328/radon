const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({

    
    author_id:{type:Number},
    author_name:String,//chetanBhagat
        

    age:Number,
    address:String}

)

module.exports = mongoose.model('Book1', authorSchema)//author