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
