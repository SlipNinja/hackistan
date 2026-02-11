import Post from "../models/Post.js";

export async function getPendingPosts(req, res) {
	const results = await Post.getPending();
	res.status(200).json(results[0]);
}

export async function getDiscutionPosts(req, res) {
	const id_discution = req.params.id;
	const results = await Post.getAllFromDiscution(id_discution);
	res.status(200).json(results[0]);
}

export async function countDiscutionPosts(req, res) {
	const id_discution = req.params.id;
	const results = await Post.countFromDiscution(id_discution);
	res.status(200).json(results[0]);
}

export async function createPost(req, res) {
	const { id_user, id_discution, content, date_posted, status, id_anwsered_post } = req.body;
	const results = await Post.create(id_user, id_discution, content, date_posted, status, id_anwsered_post);
	res.status(204).json(results[0]);
}
