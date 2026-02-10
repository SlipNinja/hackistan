import db from "../config/db.js";

export default class Discussion {
	static async getAll() {
		const sql = "SELECT * FROM discussions";
		return await db.execute(sql);
	}

	static async create(title) {
		const sql = `INSERT INTO \`discussions\` (\`title\`, \`last_modified\`)
                    VALUES ('${title}', NOW())`;
		return await db.execute(sql);
	}

	static async modified(id_discussion) {
		const sql = `UPDATE \`discussions\` SET \`last_modified\` = NOW() WHERE \`id_discussion\` = ${id_discussion}`;
		return await db.execute(sql);
	}
}
