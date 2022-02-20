import express from "express";
import cors from "cors";
import http from "http";

import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/run", runs);

console.log(process.cwd());

const PORT = process.env.PORT || 5000;

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