const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const savedToySchema = new Schema(
  {
    userid: { type: String, required: true },
    toyid: { type: String, required = true }
  }
);

const savedToy = mongoose.model("savedToy", savedToySchema);

module.exports = Toy;
