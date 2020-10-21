const express = require("express");
const router = express.Router();
const db = require("../models");

// Display the home page
// router.get("/", function(req, res) {
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

// Display Home Page
router.get("/", function (req, res) {
    db.quiz.findAll({

    }).then(result => {

        let resultJSON = result.map(obj=> obj.toJSON());
        let homeObj = {
            // Find All quizzes that match our featured criteria
            featuredQuizzes: resultJSON,
            // All Quizzes
            allQuizzes: 
            [
                { id: "1", quiz_name: "Harry Potter" },
                { id: "2", quiz_name: "Pokemon" },
                { id: "3", quiz_name: "Friends" },
                { id: "4", quiz_name: "A" },
                { id: "5", quiz_name: "AB" },
                { id: "6", quiz_name: "AC" },
                { id: "7", quiz_name: "AL" },
                { id: "8", quiz_name: "AD" },
                { id: "9", quiz_name: "AE" },
                { id: "10", quiz_name: "FA" },
            ]
        }
        console.log(resultJSON);
        res.render("home", homeObj)
    }).catch(err => {
        res.status(500).end();
    })
})

// Display a quiz by ID
router.get("/quiz/:id", function (req, res) {
    let quiz = db.quiz.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if (!result) {
            return res.status(500).send("EEP Doesnt exist");
        }
        let resultJSON = result.toJSON();
        let Quiz = { Quiz: resultJSON.quiz_name }
        res.render("quiz", Quiz)
    }).catch(err => {
        res.status(500).end();
    })
})

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