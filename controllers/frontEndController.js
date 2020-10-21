const express = require("express");
const router = express.Router();
const db = require("../models");

// Display the login page
// router.get("/", function(req, res) {
//     
//     res.render("index", hbsObject);
// });
  
// Display the home page
// router.get("/:id", function(req, res) {
//     db.quiz.findAll({
//         include:[db.user, db.quizTaken]
//     }).then(result => {
//         const homeJSON = quiz.toJSON();
//         console.log(homeJSON);
//         res.render("home", homeJSON);
//     }).catch(err => {
//         res.status(500).end();
//     })
// });

// Display the profile page
// router.get("/profile/:id", function(req, res) {
//     db.quizTaken.findOne({
//         where:{
//             userId: req.params.id
//         },
//         include: [{ models: db.answer, include: {models: db.archetype, include: {models:db.personality}}}, {models: db.quiz}]
//     }).then(result => {
//         const profileJSON = quizTaken.toJSON();
//         console.log(profileJSON);
//         res.render("profile", profileJSON);
//     })
// });

// Display the questions page
// router.get("/question/:id", function(req, res) {
//     db.quiz.findOne({
//         where:{
//             id: req.params.id
//         },
//         include:[db.answer, db.quiz]
//     }).then(result => {
//         const questionJSON = quiz.toJSON();
//         console.log(questionJSON);
//         res.render("quiz", questionJSON);
//     })
// });

module.exports = router;