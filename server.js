require("dotenv").config();

// Define User Model for passport functionality
let User = require("./models/users");

const express = require("express");
const app = express();

// Other node modules needed for passport/auth
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const session = require("express-session");
const passport = require("./backend/passport"); //Preconfigured Passport object
const MongoStore = require("connect-mongo")(session);

// Middle-ware package for ajax
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/toytrader", {
    useNewUrlParser: true
  })
  .then(
    () => console.log("Connected to Mongo"),
    err => {
      console.log("Error connecting to Mongo");
      console.log(err);
    }
  );

const connection = mongoose.connection;

// Ajax and parsing setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up passport messaging and session auth
app.use(flash());
app.use(
  session({
    secret: "process.env.SESSION_SECRET", // Environment variable,
    store: new MongoStore({ mongooseConnection: connection }),
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session()); // will call serializeUser and deserializeUser

// Console log the session object
app.use("*", (req, res, next) => {
  console.log("============User============");
  console.log(req.user);
  console.log("req.session ", req.session);
  next();
});

// Setting up the Routing folder
const routes = require("./routes");
app.use(routes);

// Serve up static assets ( on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Middleware function to check if user is currently logged in, if they are NOT, do not let them be able to use User features
function checkAuthenticated(req, res, next) {
  // Passport sets up this function
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

//Middleware function to check if user is currently logged in, if they are then do not let them relogin or re-register
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  return next();
}

//Start API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

module.exports = passport;
