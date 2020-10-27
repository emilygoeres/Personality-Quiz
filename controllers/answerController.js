const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// POST route for answer
router.post("/", function (req, res) {
    db.answer.create({
        answer: req.body.answer,
        points: req.body.points,
        questionId: req.body.questionId,
        personalityId: req.body.personalityId
    }).then(result => {
        res.json(result);
    }).catch(err => {
        // console.log(err);
        res.status(500).end();
    })
})

module.exports = router;