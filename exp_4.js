`use strict`

var express = require('express')
var app = express()
var path = require('path');  

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates4'))

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    var revStr = req.body.str.split('').reverse().join('')
    res.render('index', {revStr: revStr})
})
app.listen(process.argv[2])

// app.listen(process.env.PORT, process.env.IP)
