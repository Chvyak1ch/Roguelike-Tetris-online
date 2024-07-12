const Router = require('express')
const router = new Router()
const gamesRouter = require('./gamesRouter')
const usersRouter = require('./usersRouter')


router.use('/users', usersRouter)
router.use('/games', gamesRouter)

module.exports = router