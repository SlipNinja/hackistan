import Discution from "../models/Discution.js";

export async function getDiscutions(req, res) {
	const results = await Discution.getAll();
	res.status(200).json(results[0]);
}

export async function countDiscutions(req, res) {
	const results = await Discution.count();
	res.status(200).json(results[0]);
}

export async function getDiscutionByID(req, res) {
	const { id_discution } = req.body;
	const results = await Discution.getById(id_discution);
	res.status(200).json(results[0]);
}

export async function createDiscution(req, res) {
	const { title, description, id_user } = req.body;
	const results = await Discution.create(title, description, id_user);
	res.status(200).json(results[0]);
}
