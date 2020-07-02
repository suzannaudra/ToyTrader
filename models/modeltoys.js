const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const toysSchema = new Schema(
  {
    userid: { type: String, required: true },
    firstName: { type: String, required: true },
    toyname: { type: String, required: true },
    description: { type: String, required: true },
    //Should condition be a String or Number ? Have them rate toy condition 1-10.
    condition: { type: String, required: true },
    // image: { data: Buffer, contentType: String },
    date: { type: Date, default: Date.now },
    location: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Toy = mongoose.model("Toy", toysSchema);

module.exports = Toy;
