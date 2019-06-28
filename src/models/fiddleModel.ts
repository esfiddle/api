import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const FiddleSchema = new Schema({
      _id:  {
        required: true,
        type: String,
      },
      creator: {
        required: false,
        type: String,
      },
      description: {
        required: false,
        type: String,
      },
      fiddle: {
        required: true,
        type: String,
      },
      name: {
        required: true,
        type: String,
      },
      private: {
        required: true,
        type: Number,
      },
      stars: [{
        _id: String,
        date: Date,
      }],
      value: {
        required: true,
        type: String,
      },
      updated: {
        type: Date,
        default: Date.now,
      }
});
