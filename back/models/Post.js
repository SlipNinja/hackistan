import db from "../config/db.js";

export default class Post {
	static async getAllFromDiscussion(id_discussion) {
		const sql = `SELECT * FROM posts WHERE id_discussion = ${id_discussion} AND status = 'accepted'`;
		return await db.execute(sql);
	}

	static async getPending() {
		const sql = `SELECT * FROM posts WHERE status = 'pending'`;
		return await db.execute(sql);
	}

	static async create(id_user, id_discussion, content, date_posted, status, id_anwsered_post = NULL) {
		const sql = `INSERT INTO \`posts\` (\`content\`, \`date_posted\`, \`status\`, \`id_anwsered_post\`, \`id_discussion\`, \`id_user\`)
                    VALUES ('${content}', '${date_posted}', '${status}', '${id_anwsered_post}', '${id_discussion}', '${id_user}')`;
		return await db.execute(sql);
	}

	static async delete(id_post) {
		const sql = `DELETE FROM posts WHERE id_post = "${id_post}"`;
		return await db.execute(sql);
	}
}
