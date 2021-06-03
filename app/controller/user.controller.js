const { user } = require("../config/db");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

exports.readAll = async (req, res) => {
    try {
        const Read = await user.findAll();
        if (!Read) {
            res
                .status(400)
                .json({ success: false, message: "user not found", data: null });
        }
        res
            .status(200)
            .json({ success: true, message: "user retrieved", data: Read });

    } catch (err) {
        console.log(err)
        res
            .status(400)
            .json({ success: false, message: "can't retrieved user ", data: err });
    }
}
exports.create = async (req, res) => {
    try {
        const { name, email, password, phone, ktp } = req.body;
        const hashPassword = await bcrypt.hashSync(req.body.password, 10);
        const Create = await user.create({
            name, email, password: hashPassword, phone, ktp
        })
        if (!Create) {
            res.status(400).json({
                success: false,
                message: "proposal not created",
                data: "error",
            });
        }
        res
            .status(200)
            .json({ success: true, message: "proposal created", data: Create });
    } catch (error) {
        res
            .status(400)
            .json({ success: false, message: "proposal not created with error", data: null });
    }
}
exports.read = async (req, res) => {
    try {

        const Read = await user.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!Read) {
            res
                .status(400)
                .json({ success: false, message: "user not found", data: null });
        }
        res
            .status(200)
            .json({ success: true, message: "user retrieved", data: Read });

    } catch (err) {
        res
            .status(400)
            .json({ success: false, message: "proposal not created with error", data: err });
    }
}
exports.login = async (req, res) => {
    try {
        console.log("ini", req.body)
        const { email, password } = req.body;
        const Read = await user.findOne({
            where: { email: email }
        }, { include: [{ all: true, nested: false }] })
        console.log("ini login", Read)
        if (!Read) {
            res
                .status(400)
                .json({ success: false, message: "user not found", data: null });
        }
        const valid = await bcrypt.compareSync(password, Read.password)
        console.log(valid)
        if (!valid) {
            res
                .status(400)
                .json({ success: false, message: "wrong password", data: null });
        }
        const token = jwt.sign({ Read }, "THISISAPRIVATEKEY", {
            expiresIn: 60
        })
        res
            .status(200)
            .json({ success: true, message: "login success", data: Read });
    } catch (error) {
        res
            .status(400)
            .json({ success: false, message: "proposal not created with error", data: error });
    }
}