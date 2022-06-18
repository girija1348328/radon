let axios = require("axios")
//1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
let getMemes = async function (req, res) {
    try {
        
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//2. Pick a memeId you want (Eg 129242436) for the POST request
let memeHandler = async function (req, res) {
    try {
        let memeId = req.body.id
        let text0 = req.query.text0
        let text1 = req.query.text1
        
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`,
        
        }
        let result = await axios(options);
        console.log(result)
        res.status(200).send({ data : result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.memeHandler=memeHandler
module.exports.getMemes=getMemes