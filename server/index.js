require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(errorHandler)


const nodemailer = require("nodemailer");
const {getMail} = require('./controllers/mailController')

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
    user: "k0stia.01@ya.ru",
    pass: "ikuxsjflybzmucro",
  },
});

let qwer = {mail: "всем привет! у меня тут сервер перезапускается)", userMail: "ewq"};
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "k0stia.01@ya.ru", // sender address
    to: "k0stia.01@ya.ru", // list of receivers
    subject: "Hello ✔", // Subject line
    text: qwer.mail, // plain text body
    html: qwer.mail, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}




const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()            
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
main().catch(console.error);
