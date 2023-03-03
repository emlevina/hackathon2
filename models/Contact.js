const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 chars']
    }, 
    online: { 
        type: Boolean,
        default: false
    },
    lastContacted: { 
        type: Date
    },
    _id: { 
        type: mongoose.Schema.Types.ObjectId
    },

})

module.exports = mongoose.model('Contact', ContactSchema)