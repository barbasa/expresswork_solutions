`use strict`

var express = require('express')
var crypto = require('crypto')

var app = express()

app.put('/message/:id', function(req, res) {
    var sha1Id = crypto.createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')
    res.send(sha1Id)
})

app.listen(process.argv[2])

// app.listen(process.env.PORT, process.env.IP)