const {FAQPosts} = require('../models/models')
const ApiError = require('../error/ApiError')

class faqController {
    async create (req, res) {
        const { id, adminId, titleName, smallTitleName, adminText} = req.body;
        const faqposts = await FAQPosts.create({id, adminId, titleName, smallTitleName, adminText})
        return res.json(faqposts)
    }

    async getAll (req, res) {
        const posts = await FAQPosts.findAll()
        return res.json(posts)
    }
}

module.exports = new faqController()