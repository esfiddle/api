import * as express from "express";
import * as helmet from "helmet";
import * as swaggerUi from "swagger-ui-express";
import { fiddleRoutes } from "./routes/fiddleRoutes";

import * as swaggerDocument from "./../swagger.json";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(helmet());
    this.app.use("/fiddles", fiddleRoutes);
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export default new App().app;
