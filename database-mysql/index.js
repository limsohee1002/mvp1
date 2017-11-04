var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'wordcard'
})

// var selectAll = function(callback) {
//   connection.query('SELECT * FROM korean, english', function(err, results) {
//     if (err) {
//       callback(err);
//     } else {
//       callback(results);
//     }
//   })
// };
db.connect();

module.exports = db;
