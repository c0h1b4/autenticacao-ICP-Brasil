var express = require('express');
var app = express();

app.get('/nodejs', function (req, res) {
  let ou = req.headers.dn.split(':');
  res.send(ou[0]);
});

app.listen(3000, function () {
  console.log('Estamos utilizando a porta 3000!');
});
