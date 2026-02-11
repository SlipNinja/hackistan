import mysql from "mysql2";

const MySQL_PORT = 3306;
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hackistan",
  port: MySQL_PORT,
});

export default pool.promise();
