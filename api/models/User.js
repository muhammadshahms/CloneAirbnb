const mongoose = require("mongoose");
const { scheme } = mongoose

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})


const UserModel = mongoose.model("users", userSchema)
module.exports = UserModel;