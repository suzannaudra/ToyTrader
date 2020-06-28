const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/users");

// Define the local strategy for passport to use in order to authenticate users
const strategy = new LocalStrategy(
  {
    usernameField: "email" //Passport usernameField will be mapped by user's email
  },

  // function to search and authenticate the entered email password
  function (email, password, done) {
    // Try to find the user based on the entered email
    User.findOne({ email: email }, (err, user) => {
      // An error occurred in Mongo
      if (err) {
        return done(err);
      }
      // The user does not exist or the email associated could not be found
      if (!user) {
        return done(null, false, { message: "No user with that email" });
      }
      // The User Schema method to hash the entered password and compare with the stored one
      if (!user.checkPassword(password)) {
        return done(null, false, { message: "Incorrect Password" });
      }
      // If no other errors occur return the user object
      return done(null, user);
    });
  }
);

module.exports = strategy;
