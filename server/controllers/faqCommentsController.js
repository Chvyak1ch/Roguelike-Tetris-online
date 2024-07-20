const {CommentsPosts} = require('../models/models')
const ApiError = require('../error/ApiError')

class faqCommentsController {
    async create (req, res) {
        const {userName, userText} = req.body;
        const faqcomments = await CommentsPosts.create({userName, userText})
        return res.json(faqcomments)
    }

    async getAll (req, res) {
        const showFAQComments = await CommentsPosts.findAll()
        return res.json(showFAQComments)
    }
}

module.exports = new faqCommentsController()