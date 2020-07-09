const router = require("express").Router();
let Toy = require("../models/modeltoys");
let User = require("../models/users");

router.route("/toys").get((req, res) => {
  // console.log("Toy database");
  Toy.find({})
    .then(toys => {
      // console.log(toys);
      res.json(toys);
    })
    .catch(err => res.status(400).json("can not route to /toys " + err));
});

router.route("/toys/add").post((req, res) => {
  const userid = req.body.userid;
  const firstName = req.body.firstName;
  const toyname = req.body.toyname;
  const description = req.body.description;
  const date = req.body.date;
  const image = req.body.image;
  const condition = req.body.condition;
  const location = req.body.location;

  const addedToy = new Toy({
    userid,
    firstName,
    toyname,
    description,
    date,
    condition,
    image,
    location
  });

  console.log(addedToy);

  addedToy
    .save()
    .then(toy => {
      console.log(toy);
      User.findByIdAndUpdate(req.body.userid).then((user) => {
        //this is not for saved toy but for the toy that user own
        //THis post request is working now

        user.toys.push(toy._id);

        user.save(err => {
          console.log("Printing error" + err);
        });

      }).catch(err => res.status(400).json("Toy not saved" + err));
    });
});

router.route("/savedToys/add").post((req, res) => {
  const userid = req.body.userid;
  const savedtoyid = req.body.toyid;
  console.log(userid)
  User.findById(userid).then((user) => {
    //this is for the favorite toy routes
    // Favorite
    // console.log(user)
    user.savedtoys.push(savedtoyid);
    user.save(err => {
      if (err) {
        console.log("Printing error " + err);
      }
    });
  })
})

router.route("/savedtoys/:id").get((req, res) => {
  const userid = req.params.id;
  User.findById(userid).then((user) => {
    console.log(user.savedtoys);
    res.send(user.savedtoys)
  }).catch(err => {
    console.log(err);
    res.status(400).json("User not found" + err);
  })
})

router.route("/toy/:id").get((req, res) => {
  Toy.findById(req.params.id)
    .then(toy => res.json(toy))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/toy/:userid/:toyid").delete((req, res) => {
  console.log("Now deleting toy")
  console.log(req.params)
  Toy.findByIdAndDelete(req.params.toyid).then(() => {
    console.log("Now delteing toy from user " + req.params.userid)

    User.findByIdAndUpdate(req.params.userid).then((user) => {
      console.log("Now removing toy from user array")
      console.log(user)
      user.toys.pull({ _id: req.params.toyid });
      console.log(user.toys)
      user.save(err => {
        console.log("Printing error" + err);
      });

    }).catch(err => res.status(400).json("Toy is not deleted" + err));
  }).catch(err => res.status(400).json("Toy is not deleted" + err));
});

router.route("/toy/update/:id").post((req, res) => {
  Toy.findById(req.params.id)
    .then(toy => {
      toy.userid = req.body.userid;
      toy.toyname = req.body.toyname;
      toy.description = req.body.description;
      toy.date = req.body.date;
      toy.condition = req.body.condition;
      toy.image = req.body.image;
      //I'm not sure if this is correct for images
      toy.location = req.body.location;

      toy
        .save()
        .then(() => res.json("Toy updated."))
        .catch(err => res.status(400).json("Toy not updated " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
