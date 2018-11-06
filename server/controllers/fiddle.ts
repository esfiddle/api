class FiddleController {

  createFiddle (req, res, next) {
    return res.json({ function: [ { name: 'createFiddle' } ] });
  }

  updateFiddle (req, res, next) {
    return res.json({ function: [ { name: 'updateFiddle' } ] });
  }

  starFiddle (req, res, next) {
    return res.json({ function: [ { name: 'starFiddle' } ] });
  }

  forkFiddle (req, res, next) {
    return res.json({ function: [ { name: 'forkFiddle' } ] });
  }

  downloadFiddle (req, res, next) {
    return res.json({ function: [ { name: 'downloadFiddle' } ] });
  }

  createCodeBlock (req, res, next) {
    return res.json({ function: [ { name: 'createCodeBlock' } ] });
  }

  recentFiddles (req, res, next) {
    return res.json({ function: [ { name: 'recentFiddles' } ] });
  }

  popularFiddles (req, res, next) {
    return res.json({ function: [ { name: 'popularFiddles' } ] });
  }

}

module.exports = new FiddleController();
