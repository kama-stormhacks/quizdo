import express from "express";
import model from "../models.js";

const router = express.Router();

// get all categories
router.get("/all", function(req, res) {
    model.categoryModel.find(function (err, response) {
        if (err) {
            res.status(400).send("Error" + err);
        } else {
            res.json(response);
        }
    });
});

// post category
router.post("/", function (req, res) {
    const newCategory = new model.categoryModel({
        name: req.body.name,
        img: req.body.img,
    });
    newCategory.categoryId = newCategory._id;
});
