const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newtoysSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  //Should condition be a String or Number ? Have them rate toy condition 1-10.
  condition: { type: String, required: true },
  image: {  data: Buffer, contentType: String},
  date: { type: Date, default:Date.now },
  location: { type: String, required: true},

  }, { 

  timestamps: true,
}); 


const newtoy = mongoose.model ('toy', newtoysSchema);

module.exports = newtoy;