const router = require('express').Router();
let User = require('../models/users');

router.route('/user').get((req, res) => {
  User.find()
  .populate("toys")
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/user/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username})

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

 //Replace id with actual userid
router.route('/user/update/:id').post((req,res) => {
  User.findByIdAndUpdate(req.params.id,{ $push: { toys: req.body.toy_id } })
  .then(user =>  res.json('Saved Favorite Toy')


module.exports = router;