const express = require('express');
const {_getContacts } = require('../controllers/contacts')
const router = express.Router();

router.get('/', _getContacts)

module.exports = router