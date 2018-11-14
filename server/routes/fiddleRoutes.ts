import { Router } from "express";
import { FiddleController } from "../controllers/fiddleController";

const router: Router = Router();

const fiddleController: FiddleController = new FiddleController();

router.post("/", fiddleController.createFiddle);
router.put("/:fiddleid", fiddleController.updateFiddle);
router.post("/:fiddleid/star", fiddleController.starFiddle);
router.post("/:fiddleid/fork", fiddleController.forkFiddle);
router.post("/:fiddleid/download", fiddleController.downloadFiddle);
router.post("/:fiddleid/code-blocks", fiddleController.createCodeBlock);
router.get("/recent", fiddleController.recentFiddles);
router.get("/popular", fiddleController.popularFiddles);

export const FiddleRouter: Router = router;
