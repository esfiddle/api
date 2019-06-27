import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { FiddleSchema } from "../models/fiddleModel";

const Fiddle = mongoose.model("Fiddle", FiddleSchema);

export class FiddleController {

  public createFiddle = async (req: Request, res: Response) => {
    const fiddleDoc: mongoose.Document = new Fiddle(req.body);
    const error: mongoose.Error.ValidationError = fiddleDoc.validateSync();

    if (error) {
      res.status(400).json({ error });
    }

    try {
      const newFiddle: mongoose.Document = await fiddleDoc.save()
      res.status(200).json({
        fiddle: newFiddle,
        url: 'unique url goes here',
        urlCode: 'unique urlcode goes here'
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
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
