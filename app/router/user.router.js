module.exports = function (app){
    const controller = require("../controller/user.controller")
    app.post("/user/login", controller.login);

    app.post("/user/signup", controller.create)

    app.get("/user/read/:id", controller.read)

    app.get("/user/read/", controller.readAll)
}