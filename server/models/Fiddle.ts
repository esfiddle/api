const mongoose = require('mongoose');

const FiddleSchema = new mongoose.Schema(
    {
      _id:  String,
      fiddle: String,
      name: String,
      description: String,
      creator: String,
      private: Number,
      stars: Number,
      value: String,
    }
);

FiddleSchema.methods.create = function() {
  // create code in here

  return this.save();
}

FiddleSchema.methods.update = function() {
  // update code in here

  return this.save();
}

FiddleSchema.methods.star = function() {
  this.stars++;
  return this.save();
}

FiddleSchema.methods.fork = function() {
  // fork code here


}


FiddleSchema.methods.download = function() {
  // download code here


}

FiddleSchema.methods.create_code_block = function() {
  // create_code_block in here

  return this.save();
}



FiddleSchema.methods.recent = function() {
  // recent code here


}

FiddleSchema.methods.popular = function() {
  // popular code here


}

module.exports = mongoose.model('Fiddle', 'FiddleSchema');
