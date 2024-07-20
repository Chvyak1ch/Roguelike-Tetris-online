const Router = require('express')
const router = new Router()
const gamesRouter = require('./gamesRouter')
const usersRouter = require('./usersRouter')
const faqpostsRouter = require('./faqpostsRouter')
const faqcommentsRouter = require('./faqcommentsRouter')
const mailRouter = require('./mailRouter')

router.use('/users', usersRouter)
router.use('/games', gamesRouter)
router.use('/faqposts', faqpostsRouter)
router.use('/faqcomments', faqcommentsRouter)
router.use('/mail', mailRouter)

module.exports = router