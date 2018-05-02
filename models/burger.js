var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // insertOne : 
    // },

    updateOne: function (tableInput, col, valOfCol) {
        orm.insertOne("burgers", tableInput, col, valOfCol, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;