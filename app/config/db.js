const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "sigap", //nama database
  "root", //user
  "", //password
  {
    host: "/cloudsql/animated-lyceum-312604:asia-southeast2:sigap-blood-donor",
    dialect: "mysql",
    operatorAliases: "0",
    timezone: "+07:00", //indonesia GMT +7
    logging: false,
    dialectOptions: {
      encrypt: true,
      socketPath: '/cloudsql/animated-lyceum-312604:asia-southeast2:sigap-blood-donor'
    },
  }
);

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../model/user.model")(sequelize, Sequelize);
db.admin = require("../model/admin.model")(sequelize, Sequelize)
db.history = require("../model/history.model")(sequelize, Sequelize)

db.user.hasMany(db.history)
db.history.belongsTo(db.user)

module.exports = db;
