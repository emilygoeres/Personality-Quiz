const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// POST route for personality
router.post("/", function (req, res) {
    db.personality.create({
        personality_type: req.body.personality_type,
        personality_description: req.body.personality_description,
        archetypeId: req.body.archetypeId,
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

module.exports = router;