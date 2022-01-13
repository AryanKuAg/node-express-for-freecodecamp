var express = require('express');
var path = require('path')
var app = express();



console.log("Hello World")


app.get("/", (req, res) => {
    abspath = path.join(__dirname, 'views/index.html')
    res.sendFile(abspath)
})































 module.exports = app;
