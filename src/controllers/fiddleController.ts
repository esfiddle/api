import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { FiddleSchema } from "../models/fiddleModel";

const Fiddle = mongoose.model("Fiddle", FiddleSchema);

export class FiddleController {

  public createFiddle = (req: Request, res: Response) => {
    res.json({ function: [ {name: "createFiddle"} ] });
}

  public updateFiddle = (req: Request, res: Response) => {
    res.json({ function: [ { name: "updateFiddle" } ] });
  }

  public starFiddle = (req: Request, res: Response) => {
    res.json({ function: [ { name: "starFiddle" } ] });
  }

  public forkFiddle = (req: Request, res: Response) => {
    res.json({ function: [ { name: "forkFiddle" } ] });
  }

  public downloadFiddle = (req: Request, res: Response) => {
    res.json({ function: [ { name: "downloadFiddle" } ] });
  }

  public createCodeBlock = (req: Request, res: Response) => {
    res.json({ function: [ { name: "createCodeBlock" } ] });
  }

  public recentFiddles = (req: Request, res: Response) => {
    res.json({ function: [ { name: "recentFiddles" } ] });
  }

  public popularFiddles = (req: Request, res: Response) => {
    res.json({ function: [ { name: "popularFiddles" } ] });
  }
}

export const fiddleController = new FiddleController();
