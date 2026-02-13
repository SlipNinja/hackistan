import db from "../config/db.js";

export default class Post {
  static async getAllFromDiscution(id_discution) {
    const sql = `SELECT id_post, content, date_posted, status, id_anwsered_post, id_discution, posts.id_user, username FROM posts JOIN users ON posts.id_user = users.id_user WHERE id_discution = ${id_discution} AND status = 'accepted'`;
    return await db.execute(sql);
  }

  static async countFromDiscution(id_discution) {
    const sql = `SELECT COUNT(*) FROM posts WHERE id_discution = ${id_discution} AND status = 'accepted'`;
    return await db.execute(sql);
  }

  static async getPending() {
    const sql = `SELECT * FROM posts WHERE status = 'pending'`;
    return await db.execute(sql);
  }

  static async create(
    id_user,
    id_discution,
    content,
    date_posted,
    status,
    id_anwsered_post = NULL,
  ) {
    const sql = `INSERT INTO \`posts\` (\`content\`, \`date_posted\`, \`status\`, \`id_anwsered_post\`, \`id_discution\`, \`id_user\`)
                    VALUES ('${content}', NOW(), '${status}', ${id_anwsered_post}, '${id_discution}', '${id_user}')`;
    return await db.execute(sql);
  }

  static async delete(id_post) {
    const sql = `DELETE FROM posts WHERE id_post = "${id_post}"`;
    return await db.execute(sql);
  }
}
