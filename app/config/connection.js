var mysql = require('mysql');
// var connection = mysql.createConnection ({
//     host: 'localhost',
//     port: '3306',
//     database: 'cTest',
//     user: 'root',
//     password: ""

// });

// Connect to the database
// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });

var connection;
if(process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  
    connection = mysql.createConnection({
      port: 3306,
      host: "a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "cjmz51y8lg0frvgf",
      password: "mwlgzx172y9g59zj",
      database: "ua62tbk38r4j3hkc",
    });
};



  // Export connection
  module.exports = connection;




//create database

// createConnection.connect(function(err) {
//     if(err) throw err;
//     console.log("connected");
//         // console.error(err.stack);
//     // console.log('connection at id:' + createConnection.threadId);
//     createConnection.query("CREATE DATABASE cTest", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//       });
// });

// //create table

// createConnection.connect(function(err) {
//     if (err) throw err;
//     console.log('connected');

//     // moved columned to first postion
//     var sql = "ALTER TABLE mypicks CHANGE id id INT AUTO_INCREMENT FIRST";

//     // create table columns
//     // var sql = "ALTER TABLE mypicks (id INT AUTO_INCREMENT PRIMARY KEY, coinBought VARCHAR(25), dateBought DATE, numCoins INT(15), coinPrice INT(15), totalCost INT(20), profitLoss INT(20))";
    
//     createConnection.query(sql, function(err, result) {
//         if(err) throw err;
//         console.log(result);
//     });
// });

// //insert data into database  

// var sql = "INSERT INTO posts (title, body) VALUES ('Burger King', '1 Birthay St.')";
// createConnection.query(sql, function(err, result) {
//     if (err) throw err;
//    // console.log(result);
//   });

// //grab info from database populate into terminal

// createConnection.query('SELECT * FROM `mypicks`', function(err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

// createConnection.end();
