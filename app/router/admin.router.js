module.exports = function (app){
    const controller = require("../controller/admin.controller")
    app.post("/admin/login", controller.login);

    app.post("/admin/signup", controller.create)

    app.get("/admin/read/:id", controller.read)

    app.get("/admin/read/", controller.readAll)
}