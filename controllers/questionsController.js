const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// GET specific questions based on their ID
router.get("/:id", function (req, res) {
    db.question.findOne({
        where: {
            id: req.params.id
        },
        include: [db.answer, db.quiz]
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST route for questions
router.post("/", function (req, res) {
    db.question.create({
        question: req.body.question,
        quizId: req.body.quizId
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

module.exports = router;