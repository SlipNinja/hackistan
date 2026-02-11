import express from "express";
import user_router from "./routes/user_routes.js";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", user_router);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
