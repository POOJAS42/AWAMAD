var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "AWAMAD"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Team", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
