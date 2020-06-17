const router = require('express').Router();
let Toy = require('../models/modelpostnew');

router.route('/toy/add').get((req, res) => {
  Toy.find()
  .then(toys => res.json(toys))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/toy/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  // condition if using number, Number(req.body.condition)
  const condition = req.body.condition;
  const image = req.body.image;
   //I'm not sure if this is correct for images 
  const location = req.body.location;

  const newToy = new Toy({
    username,
    description,
    date,
    condition,
    image,
    location,
  });

  newToy.save()
  .then(() => res.json('Toy added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/toy/:id').get((req, res) => {
  Toy.findById(req.params.id)
  .then(toy => res.json(toy))
  .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;