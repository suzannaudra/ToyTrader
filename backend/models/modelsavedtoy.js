const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const savedtoysSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  //Should condition be a String or Number ? Have them rate toy condition 1-10.
  condition: { type: String, required: true },
  //I'm not sure the image information in the schema is correct
  image: {  data: Buffer, contentType: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true}
  }, { 

  timestamps: true,
}); 

const savedtoy = mongoose.model ('toy', savedtoysSchema);

module.exports = savedtoy;