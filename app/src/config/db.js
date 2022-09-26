const mysql = require("mysql");
const sqlite3 = require("sqlite3").verbose();

// open database in memory
const db = new sqlite3.Database("../database/database.sqlite", (error) => {
  if (error) {
    console.error(error.message);
  }
  console.log("Connected to the database.");
});

// close the database connection
db.close((error) => {
  if (error) {
    return console.error(error.message);
  }
  console.log("Close the database connection.");
});

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// db.connect();

module.exports = db;
