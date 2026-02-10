import db from "../config/db.js";

export default class Tag {
	static async getAll() {
		const sql = "SELECT * FROM tags";
		return await db.execute(sql);
	}

	static async getAllFromDiscussion(id_discussion) {
		const sql = `SELECT name FROM tags JOIN discussion_tag ON tags.id_tag = discussion_tag.id_tag WHERE id_discussion = ${id_discussion}`;
		return await db.execute(sql);
	}

	static async create(name) {
		const sql = `INSERT INTO \`tags\` (\`name\`) VALUES ('${name}')`;
		return await db.execute(sql);
	}
}
