var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "mysql123",  
database: "AWAMAD"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE Team (team_id INT, team_name VARCHAR(255), team_lead VARCHAR(50), team_count INT)";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
});  