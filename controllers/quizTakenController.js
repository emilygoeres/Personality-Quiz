const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// DELETE specific quiz taken based on their ID
router.delete("/quizTaken/:id", function(req,res){
    db.quizTaken.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result)
    })
})

// GET specific profile based on their ID and pulling their quiz taken information
router.get("/quizTakenAndUser/:id", function (req, res) {
    db.user.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        db.quizTaken.findAll({
            where: {
                userId: req.params.id
            }
        }).then(result2 => {
            res.json({ archetypeResult: result, quizHistory: result2 });
        })
    }).catch(err => {
        res.status(500).end();
    })
})

// GET routes for quiztaken
router.get("/quiztaken/:id", function (req, res) {
    if(req.session.user){
        db.question.findAll({
            where: {
                id: req.session.user.id
            },
            include:[{model: db.quiz, include:[db.user]}]
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).end();
        })
    } else {
        res.status(401).send("Login to see your quizzes")
    }
})

// POST routes for quiztaken
router.post("/quizTaken", function (req, res) {
    if(req.session.user){
        db.quizTaken.create({
            quizId: req.body.quizId,
            userId: req.session.user.id,
            personalityId: req.body.personalityId
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).end();
        })
    } else {
        res.status(401).send("You unauthorized to save this quiz")
    }
})

module.exports = router;