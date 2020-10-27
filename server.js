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
      maxAge: 7 * 24 * 60 * 60 * 1000
  }
}))

// Import routes from frontEndController
var frontEndRoutes = require("./controllers/frontEndController");
app.use(frontEndRoutes);

// Import routes from backEndController
var answerRoutes = require("./controllers/answerController");
app.use("/api/answer", answerRoutes);

// Import routes from userAuthController
var userAuthRoutes = require("./controllers/userAuthController");
app.use(userAuthRoutes);

// Import routes from quizController.js
var quizRoutes = require("./controllers/quizController");
app.use("/api", quizRoutes);

// Import routes from profileController.js
var profileRoutes = require("./controllers/profileController");
app.use("/api/profile", profileRoutes);

// Import routes from quizTakenController.js
var quizTakenRoutes = require("./controllers/quizTakenController");
app.use("/api", quizTakenRoutes);

// Import routes from questionsController.js
var questionsRoutes = require("./controllers/questionsController");
app.use("/api/questions", questionsRoutes);

// Import routes from archetypesController.js
var archetypesRoutes = require("./controllers/archetypesController");
app.use("/api", archetypesRoutes);

// Import routes from personalitiesController.js
var personalitiesRoutes = require("./controllers/personalitiesController");
app.use("/api/personalities", personalitiesRoutes);

// Import routes from personalitiesController.js
var userRoutes = require("./controllers/userController");
app.use("/api/user", userRoutes);

// ==================================================================

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
})