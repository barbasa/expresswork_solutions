`use strict`

var express = require('express')
var app = express()
var path = require('path');  

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

// To make your application publically accessible, Cloud9
// provides a public url. You just need to run it using this PORT and IP,
// and start the app pressing the ``Run`` button in the top menu.
// app.listen(process.env.PORT, process.env.IP)

