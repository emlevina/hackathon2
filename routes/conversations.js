const express = require('express');
const { createConversation, getConversation } = require('../controllers/conversations')
const router = express.Router();

router.post('/', createConversation)
router.get('/:id1/:id2', getConversation)

module.exports = router