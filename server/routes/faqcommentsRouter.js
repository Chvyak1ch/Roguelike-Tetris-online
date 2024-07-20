const Router = require('express')
const router = new Router()
const faqCommentsController = require('../controllers/faqCommentsController')

router.post('/create', faqCommentsController.create)
router.get('/getAll', faqCommentsController.getAll)

module.exports = router