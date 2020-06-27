const passport = require("passport");
const LocalStrategy = require("./passport-config");

const User = require("../../models/users");

// User has been authenticated and can use functionality
passport.serializeUser((user, done) => {
  console.log("Serializing user ", user);
  done(null, { _id: user._id });
});

// Deauthenticate the user
passport.deserializeUser((id, done) => {
  User.findById({ _id: id }, "email", (err, user) => {
    console.log("Deserializing user ", user);
    done(null, user);
  });
});

passport.use(LocalStrategy);

module.exports = passport;
