const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "32773",
  user: "root",
  password: "P@ssw0rd",
});

module.exports = db;
