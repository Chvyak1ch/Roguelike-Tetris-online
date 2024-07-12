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

Users.hasMany(Games)
Games.belongsTo(Users)

module.exports = {
    Users, Games,
}