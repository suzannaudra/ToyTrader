const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (!user) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      // Bcrypt will compared hashed entered password and hashed stored password
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };
  // Email and password Authentication logic
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  // User has been authenticated and can use functionality
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // Deauthenticate the user
  passport.deserializeUser((id, done) => {
    done(null, getUserById(id));
  });
}

module.exports = initialize;
