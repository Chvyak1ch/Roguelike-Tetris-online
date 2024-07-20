const bodyParser = require('body-parser');
const ApiError = require('../error/ApiError')

class mailController {
    async getMail (req, res) {

        const setMail = {mail: "sds", userMail: '213'}
        console.log(setMail.mail)
        let test = toString(setMail.mail);
        return bodyParser.json(test)
    }
}

module.exports = new mailController()