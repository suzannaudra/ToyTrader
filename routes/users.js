const router = require("express").Router();
let User = require("../models/users");
const passport = require("../backend/passport");
const bcrypt = require("bcrypt");

// Will get all the toys the user has listed
router.route("/user").get((req, res) => {
  User.find()
    .populate("toys")
    .populate("savedToys")
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/listing/:userid").get((req, res) => {
  User.findById(req.params.userid)
    .populate("toys")
    .populate("savedToys")
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// Will add a new user
router.route("/user/add").post((req, res) => {
  console.log("============User============");
  console.log(req.user);
  console.log(req.session);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const hashedPassword = req.body.password; //Not really hashed atm, but will be hashed in the pre() for the user schema
  try {
    const newUser = new User({ firstName, lastName, email, hashedPassword });

    // Saves the new user only if the email is unique/not a duplicate
    console.log(newUser);

    // User the current date to create a unique ID
    // Creating new User Model
    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch(err => {
        console.log(err);
        res.status(400).json("Error: " + err);
      }); //TODO Better Error messaging
  } catch (err) {
    throw err;
  }
});

// API route to get user when they try to login
router.route("/user/login").post(passport.authenticate("local"), (req, res) => {
  console.log("Logged in", req.user);
  let userInfo = {
    _id: req.user._id,
    firstName: req.user.firstName
  };
  res.send(userInfo);
});

router.route("/user/login").get((req, res) => {
  let user = req.session.passport.user;
  console.log("Retrieving user", req.session.passport.user);
  if (user) {
    let userInfo = {
      _id: user._id,
      firstName: user.firstName
    };
    res.send(userInfo);
  } else {
    res.send(null);
  }
});

// API route to logout the user
router.route("/user/logout").get((req, res) => {
  console.log("Logging out user" + req.user);
  req.logout();
  res.send({ msg: "logging out" });
});

//Replace id with actual userid
router.route("/user/favorite/:_id").post((req, res) => {
  User.findByIdAndUpdate(req.params.id, {}).then(user =>
    res.json("Saved Favorite Toy")
  );
});

module.exports = router;
