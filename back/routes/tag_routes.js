import express from "express";
import * as tag_ctrl from "../controllers/tag_controller.js";

const tag_router = express.Router();

tag_router.get("/", tag_ctrl.getTags);
tag_router.get("/discution/:id", tag_ctrl.getDiscutionTags);
tag_router.post("/", tag_ctrl.createTag);

export default tag_router;
