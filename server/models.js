import mongoose from "mongoose";

//Model for user
const userSchema = mongoose.Schema({
    guest: Boolean,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    fieldOfStudy: String,
    school: String,
    totalWins: Number,
    dailyFlag: Boolean,
    gamesPlayed: Number,
});
const userModel = mongoose.model("users", userSchema);

//Model for category
const categorySchema = mongoose.Schema({
    name: String,
    img: String,
});
const categoryModel = mongoose.model("categories", categorySchema);


//Model for prompts
const promptSchema = mongoose.Schema({
    question: String,
    answers: mongoose.Schema.Types.Array,
    category: mongoose.Schema.Types.ObjectId,
});
const promptModel = mongoose.model("prompts", promptSchema);

export default { userModel, categoryModel, promptModel };