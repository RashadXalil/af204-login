const express = require("express")
const mongoose = require("mongoose")
const UserRouter = require("./routes/User.routes")
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use("/user", UserRouter)

mongoose.connect("mongodb+srv://rashadkhll:rashad918@cluster0.vllij5v.mongodb.net/")
const connection = mongoose.connection
connection.once("open", () => {
    console.log("db connected")
})
app.listen(PORT, () => {
    console.log("app running on 8080")
})