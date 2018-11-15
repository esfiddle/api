import * as express from "express";
import { fiddleRoutes } from "./routes/fiddleRoutes";

const app: express.Application = express();
const PORT = process.env.PORT || 8080;

app.use("/fiddles", fiddleRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
