const router = require('express').Router();
let Toy = require('../models/modeltoys');

router.route('/').get((req, res) => {
  Toy.find()
  .then(toys => res.json(toys))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
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

router.route('/:id').get((req, res) => {
  Toy.findById(req.params.id)
  .then(toy => res.json(toy))
  .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
  Toy.findByIdAndDelete(req.params.id)
  .then(() => res.json('Toy deleted.'))
  .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
  Toy.findById(req.params.id)
  .then(toy => {
    toy.username = req.body.username
    toy.description = req.body.description;
    toy.date = Date.parse(req.body.date);
    toy.condition = req.body.condition;
    toy.image = req.body.image;
   //I'm not sure if this is correct for images 
    toy.location = req.body.location;

    toy.save()
      .then(() => res.json('Toy updated.'))
      .catch(err => res.status(400).json('Error: ' + err));
})
  .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;