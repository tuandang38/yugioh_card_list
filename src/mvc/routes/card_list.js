const express = require('express')
const router = express.Router()
const card_list = require('../controllers/card_list')

router.get('/', card_list.get)

module.exports = router

