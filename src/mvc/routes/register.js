const express = require('express')
const router = express.Router()
const register = require('../controllers/register')

router.use('/', register.get)

module.exports = router