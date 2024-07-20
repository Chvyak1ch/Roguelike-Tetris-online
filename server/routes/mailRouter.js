const Router = require('express')
const router = new Router()
const mailController = require('../controllers/mailController')

router.get('/getMail', mailController.getMail)

module.exports = router