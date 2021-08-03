const express = require('express')
const router = express.Router()
const login = require('../controllers/login')

router.get('/', login.get)

module.exports = router