const express = require("express");
const { sequelize } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

// GET all the quizzes name (GET all the quizzes)
router.get("/quiz", function (req, res) {
    db.quiz.findAll({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).end();
    })
})


// GET route for quiz question based on their ID
router.get("/quizQuestions/:id", function (req, res) {
    db.quiz.findOne({
        where: {
            id: req.params.id
        },
        include:
            [{
                model: db.question,

                include:
                    [{
                        model: db.answer,

                        include:
                            [{
                                model: db.personality

                                // include:
                                //     [{ model: db.archetype }]
                            }
                            ]
                    }
                    ]
            }
            ]
    }).then(result => {
        res.json(result);
    }).catch(err => {
        // console.log(err);
        res.status(500).end();
    })
})

// GET quizzes name based on search 
router.get("/quizzes/:search", function (req, res) {
    db.quiz.findAll({
        where:{
            [Op.or]: [
                // Return any quizzes where the title or the category contain the string in search
                { quiz_name: sequelize.where(sequelize.fn('LOWER', sequelize.col('quiz_name')), 'LIKE', '%' + req.params.search + '%')},
                { quiz_category: sequelize.where(sequelize.fn('LOWER', sequelize.col('quiz_category')), 'LIKE', '%' + req.params.search + '%')}
            ]
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// POST create a quiz name
router.post("/quiz", function (req, res) {
    db.quiz.create({
        quiz_name: req.body.quiz_name,
        quiz_category: req.body.quiz_category,
        //Get user id from session after all updates
        // userId: req.body.userId,
        image_tile: req.body.image_tile,
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router;