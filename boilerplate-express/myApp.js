require('dotenv').config();

let express = require('express');
let app = express();

    // sending a text message to the browser
    // res.send("Hello Express");

    // sending a file to the browser
    // app.get("/", function(req, res) {
    //     absolutePath = __dirname + '/views/index.html';
    //     res.sendFile(absolutePath);
    // })

    // sending a static folder an putting a css file inisde
    // app.use("/public", express.static(__dirname + "/public"));

    // sending a json file to the browser
    // app.get('/json', (req, res) => {
    //     let message = 'Hello json'
    //     if (process.env.MESSAGE_STYLE === 'uppercase') {
    //       return res.json({"message": message.toUpperCase()})
    //     }
    //     return res.status(200).json({"message": message})
    //   })

    // app.use((req, res, next) => {
    //     let string = `${req.method} ${req.path} - ${req.ip}`;
    //     console.log(string);
    //     next();
    // });

    app.get("/now", (req, res, next) => {
        let time = new Date().toString();
        req.time = time;
        next();
    }, function(req, res) {
        res.json({time: req.time});
    });



































 module.exports = app;
