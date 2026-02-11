import User from "../models/User.js";

export async function getUsers(req, res) {
	const results = await User.getAll();
	res.status(200).json(results[0]);
}
