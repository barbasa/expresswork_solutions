`use strict`

var express = require('express')
var app = express()
var path = require('path')

app.use(require('stylus').middleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))
    
app.listen(process.argv[2])

// app.listen(process.env.PORT, process.env.IP)