const express = require("express");
const router = express.Router();
const db = require("../models");

// GET all the quizzes name (GET all the quizzes)
router.get("/quiz", function(req, res){
    db.quiz.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET featured quiz
router.get('/featuredQuiz', function(req,res) {
    db.quiz_taken.findAndCountAll({
        include:[db.quiz]
    }).then(function(result) {
        res.json(result)
    })
})

// GET quizzes name based on their specific id (GET specific quiz)
router.get("/quiz/:id", function(req, res){
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

// POST create a table for the quizzes that have taken
router.post("/quiz/history", function(req, res){
    db.quiz.create({
        quiz_name: req.body.quiz_name,
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// DELETE specific quiz based on their ID (Delete)
router.delete("/quiz/:id", function(req, res){
    db.quiz.destroy({
        id: req.params.id
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// UPDATE specific quiz based on their ID (Retaking)
router.put("/quiz", function(req, res){
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

// GET specific profile based on their ID and pulling their quiz taken information
router.get("/profile/:id", function(req, res){
    db.quizTaken.findOne({
        where:{
            userId: req.params.id
        },
        include: [{ models: db.answer, include: {models: db.archetype, include: {models:db.personality}}}, {models: db.quiz}]
    }).then(result =>{
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET specific questions based on their ID
router.get("/questions/:id", function(req, res){
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


module.exports = router;