import User from "../models/User.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

export async function login(req, res) {
  const { email, password } = req.body;
  const user = (await User.getByEmail(email))[0][0];
  console.log(user);

  // const isValid = argon2.verify(user["password"], password);
  // if (!isValid) return res.status(403).json({ message: "Wrong credentials" });

  delete user["password"];

  const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "2h" });
  const result = {
    user: user,
    token: token,
  };

  return res.status(200).json(result);
}

export async function register(req, res) {
  try {
    console.log("BODY RECU :", req.body);
    const { username, email, password } = req.body;
    const hash = await argon2.hash(password);
    const result = await User.create(
      username,
      email,
      hash,
      "user"
    );

    return res.status(200).json(result);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}
