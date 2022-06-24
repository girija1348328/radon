// const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const AuthorModel = require("../Model/AuthorModel")
const VALIDATOR = require("../validator/validate")


const CreateAuthor = async function (req, res) {
    try {
        let data = req.body
        if (!data.firstName) {
            return res.status(400).send({ status: false, message: "firstName is required" });
        }
        if (!data.lastName) {
            return res.status(400).send({ status: false, message: "lastName is required" });
        }

        if (!data.title) {
            return res.status(400).send({ status: false, message: "title is required" });
        }

        if (!data.email) {
            return res.status(400).send({ status: false, message: "email is required" });
        }

        if (!data.password) {
            return res.status(400).send({ status: false, message: "password is required" });
        }



        let email = req.body.email
        if (!VALIDATOR.isValidEmail(email))
            return res.status(400).send({ msg: `this mail is not valid ::${email}` }) //template literal
        const CreatedData = await AuthorModel.create(data)
        res.status(201).send({ msg: CreatedData })
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

const logIn = async function (req, res){
    let userName = req.body.email;
  let password = req.body.password;

  let user = await AuthorModel.findOne({ email: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

    //after successfully creation of login jwt token will be created

    let token = jwt.sign(
        {
          userId: user._id.toString(),  
          batch: "Radon",
          organisation: "FunctionUp",
        },
        "Blog-site"
      );
      res.setHeader("x-api-key", token);
      res.send({ status: true, token: token });
    



}




module.exports.logIn = logIn
module.exports.CreateAuthor = CreateAuthor

