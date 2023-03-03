const Contact = require('../models/Contact')

const _getContacts = async (req, res)=>{
    const tasks = await Contact.find({})
    res.status(201).json(tasks)
}

module.exports = { _getContacts}