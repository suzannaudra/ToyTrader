const router = require("express").Router();
let Toy = require("../models/modeltoys");

router.route("/toys").get((req, res) => {
  console.log("Toy database")
  Toy.find({}).then(toys => {
    console.log(toys)
    res.json(toys)
  }).catch(err => res.status(400).json("can not route to /toys " + err));
});

router.route("/toys/add").post((req, res) => {
  const userid = req.body.userid;
  const toyname = req.body.toyname;
  const description = req.body.description;
  const date = req.body.date;
  // condition if using number, Number(req.body.condition)
  const condition = req.body.condition;
  const image = req.body.image;
  //I'm not sure if this is correct for images
  const location = req.body.location;

  const addedToy = new Toy({
    userid,
    toyname,
    description,
    date,
    condition,
    image,
    location
  });

  console.log(addedToy);

  addedToy.save().then(() => {

    res.json("Toy added!")
  }
  ).catch(err => res.status(400).json("Toy not saved" + err));
});

router.route("/toy/:id").get((req, res) => {
  Toy.findById(req.params.id)
    .then(toy => res.json(toy))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/toy/:id").delete((req, res) => {
  Toy.findByIdAndDelete(req.params.id)
    .then(() => res.json("Toy deleted."))
    .catch(err => res.status(400).json("Toy not deleted " + err));
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