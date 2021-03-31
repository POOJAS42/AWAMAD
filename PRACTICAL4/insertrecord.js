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
var sql = "INSERT INTO Team (team_id, team_name, team_lead, team_count) VALUES?";
var values=[ 
    ['1', 'team1', 'Pooja shinde', '2'],
    ['2', 'team2', 'payal Yadav', '3'],  
    ['3', 'team3', 'Tulsi Galande', '2'],  
    ['4', 'team4', 'Shivani Awasare', '4']  
];  
con.query(sql,[values], function (err, result) {  
if (err) throw err;  
console.log("Number of records inserted : "+result.affectedRows);  
});  
});