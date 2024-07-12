const Router = require('express')
const router = new Router()
const gamesController = require('../controllers/gamesController')

router.post('/create', gamesController.create)
router.get('/allGames', gamesController.getAll)

module.exports = router