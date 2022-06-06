const bookModel= require("../models/bookModel")

const createBookUser= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await bookModel.find()
    res.send({msg: allUsers})
}

module.exports.createBookUser= createBookUser
module.exports.getBookData= getBookData