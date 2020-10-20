var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname+ "/public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import models from database
var db = require("./models");

// Set Handlebars.
var handlebar = require("express-handlebars");

app.engine("handlebars", handlebar({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//  app.use(routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({force: true }).then(function() {
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
})