const mysql = require('mysql2');
const config = require('./db.config.js');

var connection = mysql.createConnection(config);

connection.connect(error => {
    if (error) throw error;
    console.log("Connected to MySQL as " + config.user + "@" + config.host);
})

module.exports = connection;