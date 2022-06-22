<<<<<<< HEAD
const BlogModel = require("../Model/BlogModel")

const getBlogs = async function (req, res) {

  try {
    let authorId = req.params.authorId;
    let catagory = req.params.catagory;
    let tags = req.params.tag;
    let subcatagory = req.params.subcategory;


    let authorDetails = await BlogModel.find(`${authorId}||${catagory}||${tags}||${subcatagory}`);
    if (!authorDetails || authorDetails.isDeleted)
      return res.send({ status: false, msg: "No such user exists" });
    res.send({ status: true, data: authorDetails });
  }

  catch(err){
    res.status(500).send({ msg: err.message })
  }
      };

module.exports.getBlogs = getBlogs
=======


// Updates a blog by changing the its title, body, 
//adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
// Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
//completed ----Check if the blogId exists (must have isDeleted false). If it doesn't, 
//completed----//return an HTTP status 404 with a response body like this
//completed--// Return an HTTP status 200 if updated successfully with a body like this
// Also make sure in the response you return the updated blog document.


const UpdateBlog = async function (req, res) {
    // Updates a blog by changing the its title, body, 
    //adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
    try {
        let data = req.body
        let Blog_Id = req.params.BlogId

        //(Assuming tag and subcategory received in body is need to be added)

        if (!Blogdata(data.title))
            return res.status(400).send({
                status: false,
                msg: "tags is Required are to update the data"
            })

        if (!Blogdata(data.body))
            return res.status(400).send({
                status: false,
                msg: "body is  Required to update the data"
            })

        //as mentioned if there is no subcategory data it will give an error of 400 
        if (!Blogdata(data.subcategory))
            return res.status(400).send({
                status: false,
                msg: "SubCategory is also   Required"
            })

        //     let userData = req.body;
        //     let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
        //     res.status(200).send({ status: updatedUser, data: updatedUser });
        //    }



        let Blogdata= req.body;
        let update = await blogModel.findByIdAndUpdate({_id:blog_Id},Blogdata)
        //{ $push: { <field1>: { <modifier1>: <value1>, ... }, ... } }
       //to update push data 
        res.status(200).send({status:true,data:update});
        
        return
         res.status(404).send("No such user exists");
    }
}
let checkBlog = await BlogModel.findById(blog_Id)

if (!checkBlog)
    return res.status(404).send({
        status: false,
        msg: "Blog Not Found"
    })

if (checkBlog.isDeleted == true)
    return res.status(400).send({
        status: false,
        msg: "This blog is Deleted"
    })

res.status(200).send({
    status: true,
    data: update
})

  

catch(err) {

    res.status(500).send({ error: err.message })

}
module.exports.UpdateBlog = UpdateBlog;
>>>>>>> 3c94bfa6b9173ce62d897c9841b2063c734b66b2
