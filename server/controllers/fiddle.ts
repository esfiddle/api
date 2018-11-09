export class FiddleController {

  public createFiddle(req, res, next) {
    return res.json({ function: [ {name: "createFiddle"} ] });
  }

  public updateFiddle(req, res, next) {
    return res.json({ function: [ { name: "updateFiddle" } ] });
  }

  public starFiddle(req, res, next) {
    return res.json({ function: [ { name: "starFiddle" } ] });
  }

  public forkFiddle(req, res, next) {
    return res.json({ function: [ { name: "forkFiddle" } ] });
  }

  public downloadFiddle(req, res, next) {
    return res.json({ function: [ { name: "downloadFiddle" } ] });
  }

  public createCodeBlock(req, res, next) {
    return res.json({ function: [ { name: "createCodeBlock" } ] });
  }

  public recentFiddles(req, res, next) {
    return res.json({ function: [ { name: "recentFiddles" } ] });
  }

  public popularFiddles(req, res, next) {
    return res.json({ function: [ { name: "popularFiddles" } ] });
  }
}
