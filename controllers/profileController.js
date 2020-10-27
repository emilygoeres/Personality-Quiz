const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// GET routes to get profile based on their specific ID
router.get("/:id", function (req, res) {
    db.user.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        // console.log("are we here though?")
        res.status(500).end();
    })
})

// POST profile to our database (Create profile)
router.post("/", function(req, res){
    db.user.create({
        user_name: req.body.user_name,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        archetype_1: 0,
        archetype_2: 0,
        archetype_3: 0,
        archetype_4: 0,
        archetype_5: 0,
        archetype_6: 0,
        archetype_7: 0,
        archetype_8: 0,
        archetype_9: 0,
        archetype_10: 0,
        archetype_11: 0,
        archetype_12: 0
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router;