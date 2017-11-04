const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const db = require('./database-mysql');
// const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, './react-client')));
// app.use(bodyParser.json());

// var data = db.query('select * from ko', function(err, result) {
//   if (err) {
//     console.log(err)
//   } else {
//     return result;
//   }
//
// })

app.get('/', function(req, res) {
  console.log('data')
  res.render('index');
});

app.get('/word', function(req, res) {
  db.query('select * from ko', function(err, result) {
    res.send(result)
  })

});

app.listen(3000, function() {
  console.log('Example app listening');
});
