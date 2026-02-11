import express from "express";
import * as user_ctrl from "../controllers/user_controller.js";

const user_router = express.Router();

user_router.get("/", user_ctrl.getUsers);

export default user_router;
