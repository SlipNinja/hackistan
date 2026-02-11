import mysql from "mysql2";
import "dotenv/config";

const pool = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	port: process.env.MYSQL_PORT,
});

export default pool.promise();
