import * as express from "express";
const router: express.Router = express.Router();

import { FiddleController } from "../controllers/fiddle";
const fiddlecontroller: FiddleController = new FiddleController();

router.post("/", fiddlecontroller.createFiddle);
router.put("/:fiddleid", fiddlecontroller.updateFiddle);
router.post("/:fiddleid/star", fiddlecontroller.starFiddle);
router.post("/:fiddleid/fork", fiddlecontroller.forkFiddle);
router.post("/:fiddleid/download", fiddlecontroller.downloadFiddle);
router.post("/:fiddleid/code-blocks", fiddlecontroller.createCodeBlock);
router.get("/recent", fiddlecontroller.recentFiddles);
router.get("/popular", fiddlecontroller.popularFiddles);

export default router;
