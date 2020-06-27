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

// Middle-ware package for ajax
const cors = require("cors");
const mongoose = require("mongoose");

// in our mongoose db/user collection find me a user with this email

// Ajax and parsing setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up passport messaging and session auth
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Environment variable
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session()); // will call serializeUser and deserializeUser

// Console log the session object
app.use((req, res, next) => {
  console.log("req.session ", req.session);
  next();
});

// Setting up the Routing folder
const routes = require("./routes");
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/toytrader"),
  { useNewUrlParser: true };
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Serve up static assets ( on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// //This will eventually be fetched from within client side React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Home Route
// app.get("/", checkAuthenticated, (req, res) => {
//   res.render("index.ejs", { name: req.user.name });
// });

// app.get("/login", checkNotAuthenticated, (req, res) => {
//   res.render("login.ejs");
// });

// Authenticate user api request
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

//Register user page
// app.get("/register", checkNotAuthenticated, (req, res) => {
//   res.render("register.ejs");
// });

app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    // User bcrypt to get a hashed password for security purposes
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //Add the new user to the user database
    // User the current date to create a unique ID
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(users);
});

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
