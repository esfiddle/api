import * as express from "express";
import { fiddleRoutes } from "./routes/fiddleRoutes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  private config(): void {
    this.app.use("/fiddles", fiddleRoutes);
  }
}

export default new App().app;
