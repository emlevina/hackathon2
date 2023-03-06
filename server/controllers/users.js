const User = require('../models/User')

const createUser = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body)
        res.status(201).json({ user })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

const getUsers = async (req, res) => {
    // so far all users
    console.log(req.body)
    try {
        const users = await User.find({})
        res.status(201).json({ users })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

module.exports = { createUser, getUsers }
