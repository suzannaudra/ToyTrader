const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    hashedPassword: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
    // location:
  },
  {
    timestamps: true,
    toys: [
      {
        type: Schema.Types.ObjectId,
        ref: "toy"
      }
    ]
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
