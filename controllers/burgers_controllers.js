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

routes.put("/devour/burger/:id", function(req, res) {
    var status = "id =" + req.params.id;
    burger.updateOne(status, "devoured", 1, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = routes;