const express = require('express');
const moment = require('moment')
const bodyParser = require('body-parser');
const requestIp = require('request-ip');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://GIRIJA:im9t78AKZG62A5PV@cluster0.j29wj.mongodb.net/girija1232", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {

        var clientIp = requestIp.getClientIp(req);
         console.log(moment().format('YYYY-MM-YY h:mm:ss a'),clientIp,req.originalUrl);
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
