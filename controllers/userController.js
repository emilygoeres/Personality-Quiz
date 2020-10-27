const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// PUT route for user to update their archetype
router.put("/:id", function (req, res) {
    if(req.session.user){
        db.user.update({
            archetype_1: sequelize.literal(`archetype_1 + ${req.body.archetype_1}`),
            archetype_2: sequelize.literal(`archetype_2 + ${req.body.archetype_2}`),
            archetype_3: sequelize.literal(`archetype_3 + ${req.body.archetype_3}`),
            archetype_4: sequelize.literal(`archetype_4 + ${req.body.archetype_4}`),
            archetype_5: sequelize.literal(`archetype_5 + ${req.body.archetype_5}`),
            archetype_6: sequelize.literal(`archetype_6 + ${req.body.archetype_6}`),
            archetype_7: sequelize.literal(`archetype_7 + ${req.body.archetype_7}`),
            archetype_8: sequelize.literal(`archetype_8 + ${req.body.archetype_8}`),
            archetype_9: sequelize.literal(`archetype_9 + ${req.body.archetype_9}`),
            archetype_10: sequelize.literal(`archetype_10 + ${req.body.archetype_10}`),
            archetype_11: sequelize.literal(`archetype_11 + ${req.body.archetype_11}`),
            archetype_12: sequelize.literal(`archetype_12 + ${req.body.archetype_12}`)
        }, {
            where: {
                id: req.session.user.id
            }
        }
        ).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).end();
        })
    }
})

module.exports = router;