const express = require('express');
const router = express.Router();
const fiddlecontroller = require('./../controllers/fiddle.ts');

router.post('/', fiddlecontroller.createFiddle);
router.put('/:fiddleid', fiddlecontroller.updateFiddle);
router.post('/:fiddleid/star', fiddlecontroller.starFiddle);
router.post('/:fiddleid/fork', fiddlecontroller.forkFiddle);
router.post('/:fiddleid/download', fiddlecontroller.downloadFiddle);
router.post('/:fiddleid/code-blocks', fiddlecontroller.createBlockImageFiddle);
router.get('/recent', fiddlecontroller.recentFiddles);
router.get('/popular', fiddlecontroller.popularFiddles);

module.exports = router;
