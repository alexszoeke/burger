var connection = require('./connection.js');


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, colToSearch, valOfCol) {
        var queryString = "INSERT INTO ?? ?? VALUES ?";
        connection.query(queryString, [tableInput, colToSearch,  valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (tableInput, col, valOfCol) {
        var queryString = "UPDATE ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, col, valOfCol], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }


};


module.exports = orm;