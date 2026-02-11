import express from "express";
import * as user_ctrl from "../controllers/user_controller.js";

const user_router = express.Router();

user_router.get("/", user_ctrl.getUsers);
user_router.get("/:id", user_ctrl.getUserById);
user_router.post("/", user_ctrl.createUser);

export default user_router;
