var mysql = require("mysql");
require('dotenv').config();

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "alexs1130",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alexs1130',
    database: 'burgers_db'
  });
}


connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

// connection.query('SELECT * FROM burgers;', function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { burgers: data });
//   });

  module.exports = connection;