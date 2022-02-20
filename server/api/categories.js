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

// get category by id
router.get("/:categoryId", function(req, res) {
    model.categoryModel.findById(req.params.categoryId, function (err, response) {
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

    newCategory.save(function (err) {
        if (err) {
          console.log(err);
          res.status(400).send("Error" + err);
        } else {
          res.send(newCategory);
        }
    });
});

export default router;
