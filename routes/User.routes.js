const express = require("express")
const { UserController } = require("../controllers/User.controller")
const router = express.Router()
router.get("/", UserController.getAll)
router.post("/signup", UserController.signup)
router.post("/login", UserController.login)
router.post("/logout", UserController.logout)


module.exports = router