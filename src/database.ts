import * as mongoose from "mongoose";

export default class Database {

  private url: string | undefined;
  private database: string | undefined;

  constructor(url: string | undefined, dbName: string | undefined) {
    this.url = url;
    this.database = dbName;
  }

  public async connect(logSuccess?: boolean) {
    try {
      await mongoose.connect(`${this.url}/${this.database}`, {
        useFindAndModify: false,
        useNewUrlParser: true,
      });
      if (logSuccess) {
        console.log(`Database connection to ${this.url}/${this.database} successful`);
      }
    } catch (err) {
        throw new Error(`Database connection error to ${this.url}/${this.database}  ${err}`);
    }
  }

  public async disconnect(logSuccess?: boolean) {
    try {
      await mongoose.disconnect();
      if (logSuccess) {
        console.log("Database disconnected.");
      }
    } catch (err) {
      console.log("Error disconnecting from db: ", err);
    }
  }

  public async clear() {
    const collections = await mongoose.connection.db.collections();
    for (const collection of collections) {
        await collection.deleteOne({}, {});
    }
  }
}

// export const dbConnect = new Database().connect;
