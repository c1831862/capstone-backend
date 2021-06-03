module.exports = function (app){
    const controller = require("../controller/history.controller")
    app.get("/history", controller.readAll);

    app.post("/histor", controller.create)

    app.get("/user/read/:id", controller.findByUserId)
}