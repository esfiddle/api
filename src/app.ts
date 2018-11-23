import * as express from "express";
import * as swaggerUi from "swagger-ui-express";
import { fiddleRoutes } from "./routes/fiddleRoutes";
import { NotFound } from "http-errors";
import * as bodyParser from "body-parser";

import * as swaggerDocument from "./../swagger.json";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.routing();
    this.config();
  }

  private routing(): void {
    this.app.use("/fiddles", fiddleRoutes);
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
    this.app.use((req: express.Request, res: express.Response) => {
      if (!res.headersSent) {
        throw new NotFound();
      }
    });
  }
}

export default new App().app;
