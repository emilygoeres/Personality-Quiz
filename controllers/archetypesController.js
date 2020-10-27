const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// GET route for archetypes
router.get("/archetypes", function(req,res) {
    db.archetype.findAll()
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

// POST request to create the archetype
router.post("/archetype", function (req, res) {
    db.archetype.create({
        archetype: req.body.archetype,
        archetype_description: req.body.archetype_description
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})

module.exports = router;