var express = require('express');
var path = require('path')
var app = express();
require( 'dotenv' ).config()


app.use('/public',express.static(path.join(__dirname , '/public/')))

app.use(function(req,res, next) {
    method = req.method
    path = req.path
    ip = req.ip
    console.log(method, path,'-',ip)
    next()
})

app.get('/now', (req, res, next) => {
    // time = {time:req.}
    req.time = new Date().toString()
    next()
}, (req, res) =>{
    res.json({time:req.time})
})

app.get("/", (req, res) => {
    abspath = path.join(__dirname, 'views/index.html')
    res.sendFile(abspath)
})

app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word})
})

app.get('/name', (req,res) => {
    // console.log(req.query)
    res.json({name:req.query.first + " " + req.query.last})
})
app.get('/json', (req, res) => {
    // console.log(process.env.MESSAGE_STYLE)
    if (process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "Hello json".toUpperCase()})
    }else{
        res.json({"message": "Hello json"})
    }
})






























 module.exports = app;
