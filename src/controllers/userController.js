const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//ceate User function
const createUser = async function (req, res) { 
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

//Login function
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),  
      batch: "Radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

//get User Data
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails || userDetails.isDeleted)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

//update User
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user || user.isDeleted) {
    return res.send({msg:"No such user exists"});
  }

  let userData = req.body;
  if (Object.keys(userData).length == 0) return res.send({msg:"Body is empty nothing to update"})

  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: "User update", data: updatedUser });
};

//delete user
const deleteUser =async function(req,res){
  let userId=req.params.userId;
  let user =await userModel.findById(userId)
  console.log(user)
   //Return an error if no user with the given id exists in the db
   if (!user) {
    return res.send("No such user exists");
  }
  if(user.isDeleted){
    return res.send("User data is already Deleted");  
  }
  let deleteFlag=await userModel.updateOne({_id:userId},{$set:{isDeleted:true}},{upsert:true})
  res.send({msg:"user successfully deleted",data:deleteFlag})
}

const postMessage = async function (req, res) {
  let message = req.body.message
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status: false, msg: "token must be present in the request header"})
  let decodedToken = jwt.verify(token, 'functionup-radon')

  if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
  
  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  //return the updated user document
  return res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
module.exports.postMessage=postMessage;