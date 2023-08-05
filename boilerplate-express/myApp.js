let express = require('express');
let app = express();

app.get("/", function(req, res) {
    // sending a text message to the browser
    // res.send("Hello Express");

    // sending a file to the browser
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);

    // sending a static folder an putting a css file insde
    app.use("/public", express.static(__dirname + "/public"));

});



































 module.exports = app;
