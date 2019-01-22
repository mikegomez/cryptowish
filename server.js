var mysql = require('mysql');
var createConnection = mysql.createConnection ({
    host: 'localhost',
    database: 'cryptowish',
    user: 'root',
    password: ""

});

// create database

// createConnection.connect(function(err) {
//     if(err) throw err;
//     console.log("connected");
//         // console.error(err.stack);
//     // console.log('connection at id:' + createConnection.threadId);
//     createConnection.query("CREATE DATABASE cryptowish", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//       });
// });

//create table

createConnection.connect(function(err) {
    if (err) throw err;
    console.log('connected');

    // moved columned to first postion
    var sql = "ALTER TABLE mypicks CHANGE id id INT AUTO_INCREMENT FIRST";

    // create table columns
    // var sql = "ALTER TABLE mypicks (id INT AUTO_INCREMENT PRIMARY KEY, coinBought VARCHAR(25), dateBought DATE, numCoins INT(15), coinPrice INT(15), totalCost INT(20), profitLoss INT(20))";
    
    createConnection.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result);
    });
});

// insert data into database  

// var sql = "INSERT INTO posts (title, body) VALUES ('Burger King', '1 Birthay St.')";
// createConnection.query(sql, function(err, result) {
//     if (err) throw err;
//    // console.log(result);
//   });

// grab info from database populate into terminal

// createConnection.query('SELECT * FROM `mypicks`', function(err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

// createConnection.end();
