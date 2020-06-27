const router = require("express").Router();
let User = require("../models/users");
const bcrypt = require("bcrypt");

// Will get all the toys the user has listed
router.route("/user").get((req, res) => {
  User.find()
    .populate("toys")
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// Will add a new user
router.route("/user/add").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    // User bcrypt to get a hashed password for security purposes
    const hashedPassword = await bcrypt.hash(password, 10);
    //Add the new user to the user database
    // User the current date to create a unique ID
    // Creating new User Model
    const newUser = new User({ firstName, lastName, email, hashedPassword });

    console.log(newUser);
    // Saves the new user only if the email is unique/not a duplicate
    newUser.save().then(() => res.json("User added!"));
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Replace id with actual userid
router.route("/user/update/:id").post((req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $push: { toys: req.body.toy_id }
  }).then(user => res.json("Saved Favorite Toy"));
});

module.exports = router;
