import * as express from 'express';
const app: express.Application = express();
const PORT = process.env.PORT || 8080;
import router from "./server/routes/fiddleRoutes";

app.use('/fiddles', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
