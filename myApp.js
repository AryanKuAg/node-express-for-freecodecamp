var express = require('express');
var path = require('path')
var app = express();


app.use('/public',express.static(path.join(__dirname , '/public/')))



app.get("/", (req, res) => {
    abspath = path.join(__dirname, 'views/index.html')
    res.sendFile(abspath)
})































 module.exports = app;
