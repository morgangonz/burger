var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();
var port = 8675;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hello",
  database: "shark_db"
});

  connection.connect(function(err) {
    console.log("connected as id " + connection.threadId);
  });

// Serve static content for the app to the browser.
app.use(express.static(process.cwd() + "/"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {

    connection.query("SELECT * FROM food;", function(err, data) {
      if (err) throw err;

      res.json(data);
    });
});

//////
app.listen(port, function() {
  console.log("Listening on port " + port)
});

