import mysql from "mysql2";

//create the connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restoran_pujas",
});

export default db;