var mysql = require("mysql");

var connection;
// commented the following code to make it work on Heroku with a mysql database.
//  = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "burgers_db"
// });

// Heroku needs to hook up with a mysql database.  The D.B. is JAWSDB.  Hook up to that.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    // run locally
    connection = mysql.createConnection({

        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

// connect.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
