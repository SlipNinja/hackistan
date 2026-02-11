import db from "../config/db.js";

export default class Discution {
	static async getAll() {
		const sql =
			"SELECT id_discution, title, last_modified, description, discutions.id_user, username FROM discutions JOIN users ON users.id_user = discutions.id_user ORDER BY last_modified";
		return await db.execute(sql);
	}

	static async count() {
		const sql = "SELECT COUNT(*) FROM discutions";
		return await db.execute(sql);
	}

	static async getById(id_discution) {
		const sql = `SELECT id_discution, title, last_modified, description, discutions.id_user, username FROM discutions JOIN users ON users.id_user = discutions.id_user WHERE id_discution = ${id_discution}`;
		return await db.execute(sql);
	}

	static async create(title, description, id_user) {
		const sql = `INSERT INTO \`discutions\` (\`title\`, \`description\`, \`id_user\`, \`last_modified\`)
                    VALUES ('${title}', ${description}, ${id_user} NOW())`;
		return await db.execute(sql);
	}

	static async modified(id_discution) {
		const sql = `UPDATE \`discutions\` SET \`last_modified\` = NOW() WHERE \`id_discution\` = ${id_discution}`;
		return await db.execute(sql);
	}
}
