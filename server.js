var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
 

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("app/public"));

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/index.html"));
//   });

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


