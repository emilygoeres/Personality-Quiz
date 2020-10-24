const express = require("express");
const { Op } = require("sequelize");
const router= express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

// Create user authentication in signup page
router.post("/signup", (req, res) => {
    db.user.create({
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
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
        req.session.user = {
            email: result.email,
            id: result.id
        }
        res.json(result);
        // res.redirect("/myprofile")
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// Create login page for existing user to sign in either from email or user_name
router.post("/login", (req, res) => {
    db.user.findOne({
        where: { 
            // [Op.or]: [
            //     { user_name: req.body.user_name },
            //     { email: req.body.email },
            // ]
            email: req.body.email 
        }
    }).then(result => {
        console.log("req.session", req.session)
        // check if user entered password matches db password
        if (!result) {
            req.session.destroy();
            return res.status(401).redirect("/signup")

        } else if (bcrypt.compareSync(req.body.password, result.password)) {
            req.session.user = {
                email: result.email,
                id: result.id
            }
            return res.json(result)
            // res.redirect("/myprofile")
        }
        else {
            req.session.destroy();
            return res.status(401).send("Your password or email is incorrect. Please try again")
        }
        // res.json(result);
    }).catch(err => {
        console.log(err)
        res.status(500).end();
    })
})

// Route for user to logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('You have successfully logged out!')
})

module.exports = router;