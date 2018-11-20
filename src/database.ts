import * as mongoose from "mongoose";

class Database {
  public db_connect(mongoUrl: string | undefined, mongoDb: string | undefined) {
    mongoose.connect(`'${mongoUrl}/${mongoDb}'`,  { useNewUrlParser: true })
      .then (() => {
        console.log(`Database connection to ${mongoUrl}/${mongoDb} successful`);
      })
      .catch((err: any) => {
        console.error(`Database connection error to ${mongoUrl}/${mongoDb}  ${err}`);
      });
  }
}

export const dbConnect = new Database().db_connect;
