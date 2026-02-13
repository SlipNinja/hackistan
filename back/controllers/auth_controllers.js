import User from "../models/User.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const userRows = await User.getByEmail(email);
    const user = userRows[0][0];

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const isValid = await argon2.verify(user.password, password);
    if (!isValid) {
      return res.status(403).json({ message: "Email ou mot de passe incorrect" });
    }

    delete user.password;

    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "2h" });

    return res.status(200).json({
      user,
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}

export async function register(req, res) {
  try {
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
