import * as express from "express";
import { fiddleController } from "../controllers/fiddleController";

class FiddleRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {

    this.router.put("/", fiddleController.updateFiddle);
    this.router.post("/", fiddleController.createFiddle);
    // this.router.put("/:fiddleid", fiddleController.updateFiddle);
    this.router.post("/:fiddleid/star", fiddleController.starFiddle);
    this.router.post("/:fiddleid/fork", fiddleController.forkFiddle);
    this.router.post("/:fiddleid/download", fiddleController.downloadFiddle);
    this.router.post("/:fiddleid/code-blocks", fiddleController.createCodeBlock);
    this.router.get("/recent", fiddleController.recentFiddles);
    this.router.get("/popular", fiddleController.popularFiddles);
  }
}

export const fiddleRoutes = new FiddleRoutes().router;
