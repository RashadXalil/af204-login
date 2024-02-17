const mongoose = require("mongoose")
const bycrpt = require("bcrypt")
const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    age: Number
})
UserSchema.pre("save", async function (next) {
    const salt = await bycrpt.genSalt()
    this.password = await bycrpt.hash(this.password, salt)
    next()
})
const User = mongoose.model("User", UserSchema)

module.exports = { User }