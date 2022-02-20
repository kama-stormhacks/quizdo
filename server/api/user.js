import express from "express";
import model from "../models.js";

const router = express.Router();

// get all users
router.get("/all", function(req, res) {
    model.userModel.find(function (err, response) {
        if (err) {
            res.status(400).send("Error" + err);
        } else {
            res.json(response);
        }
    });
});

// get user by ID
router.get("/:promptId", function(req, res) {
    model.userModel.findById(req.params.userId, function (err, response) {
        if (err) {
            res.status(400).send("Error" + err);
        } else {
            res.json(response);
        }
    });
});

// post
router.post("/", function (req, res) {
    const newUser = new model.userModel({
        guest: req.body.guest,
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fieldOfStudy: req.body.fieldOfStudy,
        school: req.body.school,
        //win streaks
        totalWins: req.body.totalWins,
        dailyFlag: req.body.dailyFlag,
        gamesPlayed: req.body.gamesPlayed,
    });
    newUser.userId = newUser._id;
});

export default router;
