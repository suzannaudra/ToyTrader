const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const { report } = require("../routes");

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
      unique: false,
      trim: true
    }
    // location:
  },
  {
    timestamps: true,
    savedtoys: [
      {
        type: Schema.Types.ObjectId,
        ref: "savedToy"
      }
    ],
    toys: [
      {
        type: Schema.Types.ObjectId,
        ref: "Toy"
      }
    ]
  }
);

//Defining methods for the user schema
userSchema.methods = {
  //Sync will make sure to make them serial in order compared to the async functions
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.hashedPassword);
  },
  hash: password => {
    return bcrypt.hashSync(password, 10);
  }
};

//Defining pre-hooks for the save method
userSchema.pre("save", function (next) {
  if (!this.hashedPassword) {
    console.log("Models User ====No Password====");
    next();
  } else {
    console.log("Models User Hash Password");
    // When creating the User the password will initially be unhashed so we must resave the password as a hashed one
    this.hashedPassword = this.hash(this.hashedPassword);
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
