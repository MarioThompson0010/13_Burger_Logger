const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Every web page needs a root
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

// create a burger
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name"], [req.body.name], function (result) {
        res.json({ id: result.insertId });
    });

});

// update a burger by devouring it
router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;
    const data = req.body.devoured;
    const cols = {
         idParm: "id", 
         devourParm: "devoured" 
    };

    burger.update(cols, [data, id], (result) => {
            res.json({ id: result.affectedRows });
        })
});

module.exports = router;