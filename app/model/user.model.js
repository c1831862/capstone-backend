module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50)
        },
        email: {
            type: Sequelize.STRING(100)
        },
        password: {
            type: Sequelize.STRING(100)
        },
        phone: {
            type: Sequelize.STRING(20)
        },
        ktp: {
            type: Sequelize.STRING, 
            uniqueKey:true
        },
        rhesus:{
            type: Sequelize.STRING(5)
        },
        gender:{
            type: Sequelize.STRING(10)
        },
        latitude:{
            type: Sequelize.STRING(50)
        },
        longitude: {
            type: Sequelize.STRING(50)
        }
    })
}