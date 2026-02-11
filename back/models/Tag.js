import db from "../config/db.js";

export default class Tag {
	static async getAll() {
		const sql = "SELECT * FROM tags";
		return await db.execute(sql);
	}

	static async getAllFromDiscution(id_discution) {
		const sql = `SELECT name FROM tags JOIN discution_tag ON tags.id_tag = discution_tag.id_tag WHERE id_discution = ${id_discution}`;
		return await db.execute(sql);
	}

	static async create(name) {
		const sql = `INSERT INTO \`tags\` (\`name\`) VALUES ('${name}')`;
		return await db.execute(sql);
	}
}
