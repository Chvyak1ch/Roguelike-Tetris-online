const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    userName: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Games = sequelize.define('games', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rows: {type: DataTypes.INTEGER},
    levels: {type: DataTypes.INTEGER},
    score: {type: DataTypes.INTEGER},
    userId: {type: DataTypes.INTEGER},

})

const FAQPosts = sequelize.define('faqposts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    adminId: {type: DataTypes.INTEGER},
    titleName: {type: DataTypes.STRING},
    smallTitleName: {type: DataTypes.STRING},
    adminText: {type: DataTypes.STRING}
})

const CommentsPosts = sequelize.define('commentsposts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userName: {type: DataTypes.STRING},
    userText: {type: DataTypes.STRING}
})

Users.hasMany(Games)
Games.belongsTo(Users)

Users.hasMany(FAQPosts)
FAQPosts.belongsTo(Users)

Users.hasMany(CommentsPosts)
CommentsPosts.belongsTo(Users)

FAQPosts.hasMany(CommentsPosts)
CommentsPosts.belongsTo(FAQPosts)




module.exports = {
    Users, Games, FAQPosts, CommentsPosts
}