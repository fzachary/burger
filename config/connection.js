// Set up MySQL connection
var mysql = require("mysql");

// Create the connection variable
var connection = mysql.createConnection({
    host: "localhost",
    port: 3006,
    user: "root",
    password: "1234",
    database: "burgers_db"
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