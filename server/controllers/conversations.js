const Conversation = require('../models/Conversation')

const createConversation = async (req, res) => {
    try {
        const conv = await Conversation.create(req.body)
        res.status(201).json({ conv })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

const getConversation = async (req, res) => {
    console.log(req.params.id1, req.params.id2)
    try {
        const conv = await Conversation.findOne({
            $and: [{ participants:  req.params.id1}, { participants:  req.params.id2}]
          })
        res.status(201).json({ conv })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

module.exports = { createConversation, getConversation }
