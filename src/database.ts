import * as mongoose from "mongoose";

class Database {
  public connect(url: string | undefined, database: string | undefined) {

    mongoose.connect(`'${url}/${database}'`, { useNewUrlParser: true })
      .then (() => {
        console.log(`Database connection to ${url}/${database} successful`);
      })
      .catch((err: any) => {
        console.error(`Database connection error to ${url}/${database}  ${err}`);
      });
  }
}

export const dbConnect = new Database().connect;
