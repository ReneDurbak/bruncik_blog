const mysql = require('mysql2');

// Create the database connection
const db = mysql.createPool({
    host: "srv937.hstgr.io",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  
  


    module.exports = db
  