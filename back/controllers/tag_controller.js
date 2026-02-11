import Tag from "../models/Tag.js";

export async function getTags(req, res) {
	const results = await Tag.getAll();
	res.status(200).json(results[0]);
}

export async function getDiscutionTags(req, res) {
	const { id_discution } = req.params;
	const results = await Tag.getAllFromDiscution(id_discution);
	res.status(200).json(results[0]);
}

export async function createTag(req, res) {
	const { name } = req.body;
	const results = await Tag.create(name);
	res.status(204).json(results[0]);
}
