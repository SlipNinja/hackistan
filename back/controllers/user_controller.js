import User from "../models/User.js";
import argon2 from "argon2";

export async function getUsers(req, res) {
	const results = await User.getAll();
	res.status(200).json(results[0]);
}

export async function getUserById(req, res) {
	const id_user = req.params.id;
	const results = await User.getById(id_user);
	res.status(200).json(results[0]);
}

export async function createUser(req, res) {
	const { username, email, password, role } = req.body;

	const hashed = await argon2.hash(password);
	const results = await User.create(username, email, hashed, role);
	res.status(204).json(results[0]);
}
