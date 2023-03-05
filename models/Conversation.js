const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema({
    participants: {
        type: [
            mongoose.Types.ObjectId
        ],
        validate: v => Array.isArray(v) && v.length > 0,
    },
    lastMessage: Date,
})


module.exports = mongoose.model('Conversation', ConversationSchema)