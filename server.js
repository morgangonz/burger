var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");


var app = express();
var port = 8675;



// Serve static content for the app to the browser:: (process.cwd)vs(_dirname +) ???
app.use(express.static(process.cwd() + "/"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

///requiring handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//mysql
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

///route
app.get("/", function(req, res) {

    connection.query("SELECT * FROM food;", function(err, data) {
      if (err) throw err;

      res.render("index", { food : data });
    });
});

//????/////
app.post("/", function(req, res) {

connection.query("INSERT INTO food (item) VALUES (?)", [req.body.event], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });

});
//////
app.listen(port, function() {
  console.log("Listening on port " + port)
});

