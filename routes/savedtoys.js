const router = require("express").Router();


router.route("/savedToy").get((req, res) => {
  console.log("Saved Toy database")
  Toy.find({}).then(toys => {
    // console.log(toys)
    res.json(toys)
  }).catch(err => res.status(400).json("can not route to /savedToy " + err));
});

router.route("/savedToy/add").post((req, res) => {
  const userid = req.body.userid;
  const toyname = req.body.toyname;
  const description = req.body.description;
  const date = req.body.date;
  const condition = req.body.condition;
  const location = req.body.location;

  const savedaddedToy = new savedToy({
    userid,
    toyname,
    description,
    date,
    condition,
    location
  });

  console.log(savedaddedToy);

  savedaddedToy.save().then(() => {

    res.json("saved Toy added!")
  }
  ).catch(err => res.status(400).json("Toy not saved" + err));
});

router.route("/savedToy/:id").get((req, res) => {
  savedToy.findById(req.params.id)
    .then(toy => res.json(toy))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/savedtoy/:id").delete((req, res) => {
  savedToy.findByIdAndDelete(req.params.id)
    .then(() => res.json("Toy deleted."))
    .catch(err => res.status(400).json("Toy not deleted " + err));
});

router.route("/user/favortie/:_id").post((req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $push: { toys: req.body.toy_id }
  }).then(user => res.json("Saved Favorite Toy"));
});


module.exports = router;