const express = require("express");
const router = express.router();
const db = require("../models");


//Quizes taken the most
router.get('/', function(req,res) {
    db.quiz_taken.findAndCountAll({
        include:[db.quiz]
    }).then(function(result) {
        res.json(result)
    })
})