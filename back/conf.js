require("dotenv").config();
const mysql = require("mysql2/promise");

const {
	DB_HOST,
	DB_USER,
	DB_PASSWORD,
	DB_NAME,
	BACK_PORT,
	JWT_SECRET,
	JWT_SALTROUNDS,
} = process.env;

const db = mysql.createPool({
	connectionLimit: 10,
	host: DB_HOST,
	user: DB_USER,
	database: DB_NAME,
	password: DB_PASSWORD,
});

module.exports = {
	db,
	port: BACK_PORT,
	jwt_secret: JWT_SECRET,
	jwt_rounds: parseInt(JWT_SALTROUNDS),
};
