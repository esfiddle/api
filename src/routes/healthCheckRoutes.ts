import * as express from "express";
import { healthCheckController } from "../controllers/healthCheckController";

class HealthCheckRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {

    this.router.get("/", healthCheckController.check);
  }
}

export const healthCheckRoutes = new HealthCheckRoutes().router;
