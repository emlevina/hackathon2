const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('User', UserSchema)