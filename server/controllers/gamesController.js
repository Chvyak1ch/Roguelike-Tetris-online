const {Games} = require('../models/models')
const ApiError = require('../error/ApiError')

class GamesController {
    async create (req, res) {
        const {rows, levels, score, userId} = req.body;
        const games = await Games.create({rows, levels, score, userId})
        return res.json(games)
    }

    async getAll (req, res) {
        const allGames = await Games.findAll()
        return res.json(allGames)
    }
}

module.exports = new GamesController()