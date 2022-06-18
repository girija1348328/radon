const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memeController= require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states",CowinController.getStates)
router.get("/cowin/districtsInState/:stateId",CowinController.getDistricts)
router.get("/cowin/getByPin",CowinController.getByPin)
router.get("/cowin/getVaccine",CowinController.getVaccine)
router.post("/cowin/getOtp",CowinController.getOtp)

router.get("/weather",weatherController.getWeather)
router.get("/weather/temperature",weatherController.getTemperature)
router.get("/sortedTemp",weatherController.sortedTemp)

router.get("/memes",memeController.getMemes)
router.post("/memeHandler",memeController.memeHandler)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;