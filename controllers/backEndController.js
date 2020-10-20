const express = require("express");
const router = express.Router();
const db = require("../models");

// GET all the quizzes name (GET all the quizzes)
router.get("/quiz", function(req, res){
    db.quiz.findAll({
        include:[db.quiz]
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET featured quiz


// GET quizzes name based on their specific id (GET specific quiz)
router.get("/quiz/:id", function(req, res){
    db.quiz.findOne({
        where:{
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET specific quiz history
router.get("/quiz/history", function(req,res){
    db.result.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST quizzes to quiz history
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
        include:[db.result]
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// GET specific profile based on their ID
router.get("/profile/:id", function(req, res){
    db.User.findOne({
        where:{
            id: req.params.id
        },
        include: [db.personality, db.result]
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


