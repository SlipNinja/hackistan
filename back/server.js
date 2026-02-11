import express from "express";
import user_router from "./routes/user_routes.js";
import discution_router from "./routes/discution_routes.js";
import post_router from "./routes/post_routes.js";
import tag_router from "./routes/tag_routes.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const whiteList = ["http://localhost:5173"];
app.use(cors({ origin: whiteList }));
app.use(express.json());
app.use("/users", user_router);
app.use("/discutions", discution_router);
app.use("/posts", post_router);
app.use("/tags", tag_router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
