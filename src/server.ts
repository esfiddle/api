import * as dotenv from "dotenv";
import app from "./app";
import Database from "./database";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const MONGO_LIVE_DB = process.env.MONGO_LIVE_DB;
const PORT = process.env.PORT || 8080;

const db = new Database(MONGO_URI, MONGO_LIVE_DB);

app.listen(PORT, () => {
  db.connect();
  console.log(`App listening on port ${PORT}`);
}).on("error", () => {
  console.log("Error starting server");
});
