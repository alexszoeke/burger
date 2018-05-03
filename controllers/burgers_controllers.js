var express = require('express');
var burger = require('../models/burger.js');
var app = express();
var routes = express.Router();

// Create all our routes and set up logic within those routes where required.
routes.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

routes.post("/create/burger", function (req, res) {
    burger.insertOne(req.body.name, function (result) {
        res.json({
            id: result.insertId
        });
    });
});

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
module.exports = routes;