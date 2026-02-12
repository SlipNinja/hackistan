import express from "express";
import * as post_ctrl from "../controllers/post_controller.js";
import { censorMiddleware } from "../middlewares/moderation.message.js";

const post_router = express.Router();

post_router.get("/pending", post_ctrl.getPendingPosts);
post_router.get("/discution/:id", post_ctrl.getDiscutionPosts);
post_router.get("/count/:id", post_ctrl.countDiscutionPosts);
post_router.post("/", censorMiddleware, post_ctrl.createPost);


export default post_router;
