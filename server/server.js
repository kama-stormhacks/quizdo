import express from "express";
import cors from "cors";
import http from "http";

import prompts from "./api/prompts.js";
import categories from "./api/categories.js";
import user from "./api/user.js"

import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/prompts", prompts);
app.use("/categories", categories);
app.use("/user", user);

console.log(process.cwd());

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Listening on ${PORT}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API Running");
  });
}

export default app;