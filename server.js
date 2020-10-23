var express = require("express");

require("dotenv").config();

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

var session = require("express-session");

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 2 * 60 * 60 * 1000
  }
}))

// Import routes
var frontEndRoutes = require("./controllers/frontEndController");
app.use(frontEndRoutes);

// Import routes
var backEndRoutes = require("./controllers/backEndController");
app.use(backEndRoutes);

// Import routes
var userAuthRoutes = require("./controllers/userAuthController");
app.use(userAuthRoutes);

// Routes to GET personality
app.get("/api/samplePersonality", function(req, res){
  res.json({personalities: personalities})
})

// Routes to GET quiz
app.get("/api/sampleQuiz", function(req, res){
  res.json({quiz: quiz})
})

// ==================================================================

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
})