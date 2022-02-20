import express from "express";
import model from "../models.js";

const router = express.Router();

// get prompt by ID
router.get("/:promptId", function(req, res) {
    model.promptModel.findById(req.params.promptId, function (err, response) {
        if (err) {
            res.status(400).send("Error" + err);
        } else {
            res.json(response);
        }
    });
});

// post prompt
router.post("/", function (req, res) {
    const newPrompt = new model.promptModel({
        question: req.body.question,
        answers: req.body.answers,
        category: req.body.category,
    });
    newPrompt.promptId = newPrompt._id;

    newPrompt.save(function (err) {
        if (err) {
          console.log(err);
          res.status(400).send("Error" + err);
        } else {
          res.send(newPrompt);
        }
    });
});

export default router;
