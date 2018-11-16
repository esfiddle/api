import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import app from "./app";
import { fiddleRoutes } from "./routes/fiddleRoutes";

dotenv.config();

const PORT = process.env.PORT || 8080;
const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true }, () =>{
  console.log(`Connected to ${mongoDB}`)
});

app.use("/fiddles", fiddleRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
