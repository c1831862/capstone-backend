const data = require("../config/db").history;
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

exports.readAll = async (req, res) => {
    try {
        const Read = await data.findAll();
        if (!Read) {
            res
                .status(400)
                .json({ success: false, message: "history not found", data: null });
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
        const { recency, frequency, monetary, time } = req.body;
        const Create = await data.create({
            recency, frequency, monetary, time,
        })
        if (!Create) {
            res.status(400).json({
                success: false,
                message: "history not created",
                data: "error",
            });
        }
        res
            .status(200)
            .json({ success: true, message: "history created", data: Create });
    } catch (error) {
        res
            .status(400)
            .json({ success: false, message: "history not created with error", data: null });
    }
}
exports.findByUserId = async (req, res) => {
    try {

        const Read = await data.findOne({
            where: {
                userId: req.params.id
            }
        })
        if (!Read) {
            res
                .status(400)
                .json({ success: false, message: "history not found", data: null });
        }
        res
            .status(200)
            .json({ success: true, message: "history retrieved", data: Read });

    } catch (err) {
        res
            .status(400)
            .json({ success: false, message: "proposal not created with error", data: err });
    }
}