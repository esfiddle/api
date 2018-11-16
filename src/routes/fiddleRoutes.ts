import * as blockify from "@esfiddle/blockify";
import { Request, Response, Router } from "express";
import { fiddleController } from "../controllers/fiddleController";

class FiddleRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.post("/", fiddleController.createFiddle);
    this.router.put("/:fiddleid", fiddleController.updateFiddle);
    this.router.post("/:fiddleid/star", fiddleController.starFiddle);
    this.router.post("/:fiddleid/fork", fiddleController.forkFiddle);
    this.router.post("/:fiddleid/download", fiddleController.downloadFiddle);
    this.router.post("/:fiddleid/code-blocks", async (req: Request, res: Response) => {
      const fiddleId = req.params.fiddleId;
      const fiddleRecord = await fiddleController.getFiddleById(fiddleId);


    });
    this.router.get("/recent", fiddleController.recentFiddles);
    this.router.get("/popular", fiddleController.popularFiddles);
  }
}

export const fiddleRoutes = new FiddleRoutes().router;
