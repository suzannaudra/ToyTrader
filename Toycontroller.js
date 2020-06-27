const db = require("../Project3-project3/models/modeltoys");

// Defining methods for the toyController
module.exports = {
  findAll: function (req, res) {
    db.Toy.find(req.query)
      .then(dbtoy => res.json(dbtoy))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Toy.findById(req.params.id)
      .then(dbtoy => res.json(dbtoy))
      .catch(err => res.status(422).json(err));
  },
  //Save toy function
  create: function (req, res) {
    db.Toy.create(req.body)
      .then(dbtoy => res.json(dbtoy))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Toy.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbtoy => res.json(dbtoy))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Toy.findByIdAndRemove(req.params.id)
      .then(dbtoy => dbtoy.remove())
      .then(dbtoy => res.json(dbtoy))
      .catch(err => res.status(422).json(err));
  }
};
