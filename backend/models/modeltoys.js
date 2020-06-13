const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toySchema = new Schema({
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

const toy = mongoose.model ('toy', toySchema);

module.exports = toy;