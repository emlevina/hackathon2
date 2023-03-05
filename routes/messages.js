const express = require('express');
const { createMessage, getMessages } = require('../controllers/messages')
const router = express.Router();

router.post('/', createMessage)
router.get('/:conversationId', getMessages)

module.exports = router