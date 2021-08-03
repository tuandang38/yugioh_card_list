const express = require('express')
const router = express.Router()
const home = require('../controllers/home')

router.use('/', home.get)

module.exports = router