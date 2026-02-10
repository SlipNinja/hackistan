import db from "../config/db.js";

export default class User {
	static async getAll() {
		const sql = "SELECT * FROM users";
		return await db.execute(sql);
	}

	static async getById(id_user) {
		const sql = `SELECT * FROM users WHERE id_user = ${id_user}`;
		return await db.execute(sql);
	}

	static async getByEmail(email) {
		const sql = `SELECT * FROM users WHERE email = "${email}"`;
		return await db.execute(sql);
	}

	static async create(username, email, password, role) {
		const sql = `INSERT INTO \`users\` (\`username\`, \`email\`, \`password\`, \`role\`, \`is_banned\`)
                    VALUES ('${username}', '${email}', '${password}', '${role}', false)`;
		return await db.execute(sql);
	}
}
