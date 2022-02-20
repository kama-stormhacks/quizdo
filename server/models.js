import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Model for user
const userSchema = mongoose.Schema({
    guest: Boolean,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    fieldOfStudy: String,
    school: String,
    totalWins: Int,
    dailyFlag: Boolean,
    gamesPlayed: Int,
});
const userModel = mongoose.userModel("users", userSchema);

//Model for category
const categorySchema = mongoose.Schema({
    name: String,
    img: String,
});
const categoryModel = mongoose.categoryModel("categories", categorySchema);


//Model for prompts
const promptSchema = mongoose.Schema({
    question: String,
    answers: mongoose.Schema.Types.Array,
    category: String,
});
const promptModel = mongoose.promptModel("prompts", promptSchema);

