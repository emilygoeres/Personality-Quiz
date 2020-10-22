const express = require("express");
const router = express.Router();
const db = require("../models");

// GET all the quizzes name (GET all the quizzes)
router.get("/api/quiz", function(req, res){
    db.quiz.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET featured quiz
router.get('/api/quiz/featured', function(req,res) {
    db.quiz_taken.findAndCountAll({
        include:[db.quiz]
    }).then(function(result) {
        res.json(result)
    })
})

// GET quizzes name based on their specific id (GET specific quiz)
router.get("/api/quiz/:id", function(req, res){
    db.quiz.findOne({
        where:{
            id: req.params.id
        },
        include:[db.quizTaken]
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET quizzes name based on search 
router.get("/api/quiz/:search", function(req, res){
    // var search = quiz.quiz_name.replace(/\s+/g, "").toLowerCase();
    db.quiz.findAll({
        where:{
            quiz_name: req.params.search,
            // $or: [{category: req.params.search}]
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST create a quiz name
router.post("/api/quiz", function(req, res){
    db.quiz.create({
        quiz_name: req.body.quiz_name,
        userId: req.body.userId,
        image_tile: req.body.image_tile,
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// DELETE specific quiz based on their ID (Delete)
router.delete("/api/quiz/:id", function(req, res){
    db.quiz.destroy({
        id: req.params.id
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// UPDATE specific quiz based on their ID (Retaking)
router.put("/api/quiz", function(req, res){
    db.quiz.update({
        quiz_name: req.body.quiz_name
    },{
        include:[{models: db.quizTaken, include:{models: db.answer}}]
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// Test
// router.get("/api/profile/:id", function(req, res){
//     db.quizTaken.findOne({
//         where:{
//             userId: req.params.id
//         },
//         include: [{ models: db.answer, include: {models: db.archetype, include: {models:db.personality}}}, {models: db.quiz}]
//     }).then(result =>{
//         res.json(result);
//     }).catch(err => {
//         res.status(500).end();
//     })
// })

// GET specific profile based on their ID and pulling their quiz taken information
router.get("/api/profile/:id", function(req, res){
    db.user.findOne({
        where:{
            id: req.params.id
        }
    }).then(result =>{
        res.json(result);
    }).catch(err => {
        console.log("are we here though?")
        res.status(500).end();
    })
})

// POST profile to our database (Create profile)
router.post("/api/profile", function(req, res){
    db.User.create({
        user_name: req.body.user_name,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// UPDATE profile in database
// router.put("/api/profile", function(req, res){
//     db.user.update({
//         user_name: req.body.user_name,
//         password: req.body.password,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email
//     }).then(result => {
//         res.json(result);
//     }).catch(err => {
//         res.status(500).end();
//     })
// })

// GET specific questions based on their ID
router.get("/api/questions/:id", function(req, res){
    db.question.findOne({
        where:{
            id:req.params.id
        },
        include:[db.answer, db.quiz]
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST questions
router.post("/api/questions", function(req, res){
    db.question.create({
        question: req.body.question,
        quizId: req.body.quizId
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST answer
router.post("/api/answer", function(req, res){
    db.answer.create({
       answer: req.body.answer,
       points: req.body.points,
       questionId: req.body.questionId,
       personalityId: req.body.personalityId
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST personality
router.post("/api/personalities", function(req, res){
    db.personality.create({
        personality_type: req.body.personality_type,
        personality_description: req.body.personality_description,
        archetypeId: req.body.archetypeId
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// PUT request to update the archetype
router.put("/api/archetype", function(req, res){
    db.archetype.update({
        archetype: req.body.archetype,
        archetype_description: req.body.archetype
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST archetype
router.post("/api/archetypes", function(req, res){
    db.archetype.create({
        archetype: req.body.archetype,
        archetype_description: req.body.archetype_description
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET routes for quiztaken
router.get("/api/quiztaken/:id", function(req, res){
    db.question.findOne({
        where:{
            id:req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST routes for quiztaken
router.post("/api/quiztaken", function(req, res){
    db.quizTaken.create({
        quizId: req.body.quizId,
        userId: req.body.userId,
        personalityId: req.body.personalityId
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})


// TODO: route that takes a quizId and returns an object with all the questions and answers and personalities for that quiz 
// router.get("/api/quizrequest/:id") or something. Maybe think of something better than quizrequest :)
// NOTE: This could be 2 different routes if needed
// ex: search for a quiz id 1
// returns:
// quizObj {
//     Personalities: [],
//     Questions: [],
//     Answers: []
// }


module.exports = router;