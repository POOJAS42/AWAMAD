var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "mysql123"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE AWAMAD", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
}); 