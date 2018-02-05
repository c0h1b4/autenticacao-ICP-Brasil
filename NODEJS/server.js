const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/meusite.com.br/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/meusite.com.br/fullchain.pem'),
  ca: fs.readFileSync('/sites/CA/bundle.crt'),
  requestCert: true,
  rejectUnauthorized: false
}

app.use(function (req, res, next) {
  res.writeHead(200)
  res.end(req.socket.getPeerCertificate().subject.CN + "\n")
  // console.log(req.socket.getPeerCertificate().subject.CN)
  next()
})

var listener = https.createServer(options, app).listen(433, function () {
  console.log('Express HTTPS server listening on port ' + listener.address().port);
})


