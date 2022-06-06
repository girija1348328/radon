const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    bookName: {type:String,
               unique:true,
               required:true},
    authorName: {type:String,
                required:true},
    category : [String],
    year:String,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('Book1', userSchema) //users



// String, Number
// Boolean, Object/json, array