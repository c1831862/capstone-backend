module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        recency: {
            type: Sequelize.STRING(50)
        },
        frequency: {
            type: Sequelize.STRING(100)
        },
        monetary: {
            type: Sequelize.STRING(100)
        },
        time: {
            type: Sequelize.STRING(20)
        },
    })
}