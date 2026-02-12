import User from "../models/User";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

export async function login(req, res) {
	const { email, password } = req.body;
	const user = await User.getByEmail(email)[0];

	const isValid = argon2.verify(user["password"], password);
	if (!isValid) return res.status(403).json({ message: "Wrong credentials" });

	delete user["password"];

	const result = {
		user: user,
		token: token,
	};

	const token = jwt.sign(result, process.env.SECRET_KEY, { expiresIn: "2h" });
	res.status(204).json(token);
}
