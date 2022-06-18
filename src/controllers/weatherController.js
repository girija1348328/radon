let axios = require("axios")

let getWeather = async function (req, res) {

    try {
        let city = req.query.q
        let app =req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app}`
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

let getTemperature = async function (req, res) {

    try {
        let q = req.query.q
        let appId =req.query.appId
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appId=${appId}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
const sortedTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = [];

        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i]}

            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a2bf997473c65ee1a8bfe55f0e2847e9`
            }
            let result = await axios(options);
            
            obj.temp = result.data.main.temp
            arr.push(obj)
        }
        let sortedCity = arr.sort((a, b) => {
            return a.temp - b.temp
        })
        res.status(200).send({ status: true, msg: sortedCity })

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



// let sortedTemp = async function (req, res) {
// try{
//     let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
//     let cityObject = []

//     for(let i =0;i<=cities.length;i++)
//     {
//         let obj = {city:cities[i]}
//         let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d8156c9577895059a66640a8e1064373`)
//         //console.log(resp.data.main.temp)
//         obj.temp = resp.data.main.temp 
//         cityObject.push(obj)
        
//     }
//     console.log(cityObject)
//         // let sorted = cityObject.sort(function(a,b){return a.temp - b.temp})
//         // console.log(sorted)
//         res.status(200).send({status:true,data:cityObject})
    
// }
// catch (err) {
//     console.log(err)
//     res.status(500).send({ msg: err.message })
// }

//}
module.exports.getTemperature = getTemperature
module.exports.getWeather = getWeather
module.exports.sortedTemp = sortedTemp