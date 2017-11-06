const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const db = require('./database-mysql');
// const dbb = require('./index');
const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, './react-client')));
// app.use(bodyParser.json());

// var data = function(callback) {db.query('select * from ko', function(err, result) {
//   callback(err, result)
// })}

app.get('/', function(req, res) {
  console.log('data')
  res.render('index');
});

app.get('/kor', function(req, res) {
  db.query('select * from ko', function(err, result) {
    res.send(result)
    // console.log(result)
  })

});

app.get('/eng', function(req, res) {
  db.query('select * from en', function(err, result) {
    res.send(result)
    // console.log(result)
  })

});

app.listen(3000, function() {
  console.log('Example app listening');
});
