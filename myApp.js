var express = require('express');
var path = require('path')
var app = express();


app.use('/public',express.static(path.join(__dirname , '/public/')))



app.get("/", (req, res) => {
    abspath = path.join(__dirname, 'views/index.html')
    res.sendFile(abspath)
})

app.get('/json', (req, res) => {
    res.json({"message": "Hello json"})
})






























 module.exports = app;
