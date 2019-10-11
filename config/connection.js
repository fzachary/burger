// Set up MySQL connection
var mysql = require("mysql");

// Create the connection variable
var connection = mysql.createConnection({
    host: "r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "mhk2rhnej591o80h",
    password: "efu0ievdm52q8iln",
    database: "orayei7tzs1dcgn5"
});

// Make the connection to the database
connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exporrt the connection for use by the ORM
module.exports = connection;