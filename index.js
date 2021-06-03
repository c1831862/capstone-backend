const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();
const db = require("./app/config/db");
const port = process.env.PORT || 3000

app.listen(port, function () {
    console.log("connected")
})
db.sequelize.sync({ alter: true })
app.get("/", function (req, res) {
    res.json({
        success: true
    })
})
require("./app/router/user.router")(app)
require("./app/router/admin.router")(app)
require("./app/router/history.router")(app)