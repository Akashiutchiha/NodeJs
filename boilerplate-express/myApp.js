let express = require('express');
let app = express();

app.get("/json", function(req, res) {
    // sending a text message to the browser
    // res.send("Hello Express");

    // sending a file to the browser
    // absolutePath = __dirname + '/views/index.html';
    // res.sendFile(absolutePath);

    // sending a static folder an putting a css file inisde
    // app.use("/public", express.static(__dirname + "/public"));

    // sending a json file to the browser
    res.json({"message": "Hello json"});

});



































 module.exports = app;
