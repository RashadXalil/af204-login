const express = require("express")
const { User } = require("../models/User.model")
const bycrpt = require("bcrypt")
const UserController = {
    getAll: async (req, res) => {
        try {
            const users = await User.find()
            res.send(users)
        }
        catch (error) {
            res.send("an error occured while getting all users")
        }
    },
    signup: async (req, res) => {
        try {
            const { name, email, password, age } = req.body
            const user = new User({ name, email, password, age })
            await user.save()
            res.status(201).send("new user created")
        }
        catch (error) {
            res.send("an error occured while signing up")
        }
    },
    login: async (req, res) => {
        try {
            res.send("login req")
        }
        catch (error) {
            res.send("an error occured while loggin in")
        }

    },
    logout: async (req, res) => {
        try {
            res.send("logout req")
        }
        catch (error) {
            res.send("an error occured while logout")
        }
    }
}
module.exports = { UserController }