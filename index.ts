import * as express from "express";
import { FiddleRouter } from "./server/routes/fiddleRoutes";

const app: express.Application = express();
const PORT = process.env.PORT || 8080;

app.use('/fiddles', FiddleRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
