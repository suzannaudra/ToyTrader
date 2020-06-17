const router = require('express').Router();
let savedtoy = require('../models/modelsavedtoy');

router.route('/savedtoys').get((req, res) => {
  savedtoy.find()
  .then(toys => res.json(toys))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/savedtoys').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  // condition if using number, Number(req.body.condition)
  const condition = req.body.condition;
  const image = req.body.image;
   //I'm not sure if this is correct for images 
  const location = req.body.location;
});

router.route('/savedtoys:id').get((req, res) => {
  savedtoy.findById(req.params.id)
  .then(toy => res.json(toy))
  .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/savedtoys:id').delete((req, res) => {
  savedtoy.findByIdAndDelete(req.params.id)
  .then(() => res.json('Toy deleted.'))
  .catch(err => res.status(400).json('Error: ' + err))
});

router.route('savedtoys/update/:id').post((req,res) => {
  savedtoy.findById(req.params.id)
  .then(toy => {
    toy.username = req.body.username
    toy.description = req.body.description;
    toy.date = Date.parse(req.body.date);
    toy.condition = req.body.condition;
    toy.image = req.body.image;
    toy.location = req.body.location;

    savedtoy.save()
      .then(() => res.json('Toy updated.'))
      .catch(err => res.status(400).json('Error: ' + err));
})
  .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;