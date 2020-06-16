if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const session = require("express-session");

// Can store users on database
const users = [];

const passport = require("passport");
const initializePassport = require("./passport-config");
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
// Home Route
app.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

// Authenticate user
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

//Register user page
app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

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
app.listen(3000);
