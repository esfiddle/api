import mongoose = require("mongoose");

const FiddleSchema = new mongoose.Schema(
    {
      _id:  String,
      creator: String,
      description: String,
      fiddle: String,
      name: String,
      private: Number,
      stars: Number,
      value: String,
    },
);

FiddleSchema.methods.create = function() {
  // create code in here

  return this.save();
};

FiddleSchema.methods.update = function() {
  // update code in here

  return this.save();
};

FiddleSchema.methods.star = function() {
  this.stars++;
  return this.save();
};

// module.exports = mongoose.model("Fiddle", "FiddleSchema");
