const Router = require('express')
const router = new Router()
const faqController = require('../controllers/faqController')

router.post('/create', faqController.create)
router.get('/getAll', faqController.getAll)

module.exports = router