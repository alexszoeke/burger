var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.insertOne("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;


// var orm = require('../config/orm.js');

// var burger = {
//     selectAll: function (cb) {
//         orm.selectAll('burgers', function (res) {
//             cb(res);
//         });
//     },

//     // insertOne: 
//     // },

//     updateOne: function (tableInput, col, valOfCol) {
//         orm.insertOne("burgers", tableInput, col, valOfCol, function (res) {
//             cb(res);
//         });
//     }
// };

// module.exports = burger;