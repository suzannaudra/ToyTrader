const Toy = require("../models/modeltoys");
const express = require("express");
const toySearchRouter = express.Router();
//API request that uses find to search for whatever is typed into the "query"
toySearchRouter.get("/find/:query", function (req, res) {
    var query = req.params.query;
    //Uses a RegEx expression to query the different defined categories in the schema
    const re = new RegExp(query, "i");
    //Searchs the "Toy" model that it gets from the mongoose.model toyschema. Uses the regex expression to search each condition for query,"i"
    Toy.find({
        $and: [
            {
                $or: [
                    { toyname: re },
                    { description: re },
                    { firstName: re },
                    { condition: re },
                    { location: re }
                ]
            }
        ]
    })
        //returns results as a Json object if error returns error
        .then(result => {
            console.log("results of search")
            console.log(result)
            res.json(result);
        })
        .catch(err => res.status(500).json({ error: err }));
});


module.exports = toySearchRouter;