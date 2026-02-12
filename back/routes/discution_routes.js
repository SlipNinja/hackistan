import express from "express";
import * as discution_ctrl from "../controllers/discution_controller.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const discution_router = express.Router();

discution_router.get("/", discution_ctrl.getDiscutions);
discution_router.get("/count", discution_ctrl.countDiscutions);
discution_router.get("/:id", discution_ctrl.getDiscutionByID);
discution_router.post("/", authMiddleware, discution_ctrl.createDiscution);

export default discution_router;
