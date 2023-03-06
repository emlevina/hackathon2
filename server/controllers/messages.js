const Message = require('../models/Message')

const createMessage = async (req, res) => {
    console.log(req.body)
    try {
        const message = await Message.create(req.body)
        res.status(201).json({ message })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

const getMessages = async (req, res) => {
    console.log(req.params) // passing conversation ID
    try {
        if(req.params.messages !== 'undefined'){
            console.log('seems ok')
            const messages = await Message.find(req.params)
            res.status(201).json({ messages })
        } else {
            throw Error
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

module.exports = { createMessage, getMessages }
