import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./server.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.QUIZDO_DB_URI, {
    poolSize: 50,
    wtimeout: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  });