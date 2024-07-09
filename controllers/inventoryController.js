const inventoryModel = require("../models/inventoryModel")
const userModel = require("../models/userModel")

let createInventoryController = async (req, res, next) => {
    try {
        let { email, inventoryType } = req.body;
        if (!email || !inventoryType) res.status(404).send({
            message: "All filed are required* ",
            success: false
        })

        let user = await userModel.findOne({ email: email })
        if (!user) throw new Error('User is not found')
        if (user.role === 'donar' && inventoryType !== "in")
            throw new Error('Not a User Account')
        if (user.role == "hospital" && inventoryType !== "out")
            throw new Error('Not a Hospital Account')

        let inventory = new inventoryModel(req.body)
        await inventory.save()
        res.status(201).send({
            message: "Inventory created successfully",
            success: true,
            inventory
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "something wrong while creating inventory",
            success: false,
            error
        })

    }
}


// this is for the getting -inventory
let getInventoryController = async (req, res, next) => {
    try {
        if (!req.body.organization)
            return res.status(401).send({
                message: "Not Valid",
                success: false,
            })

        let inventory = await inventoryModel.findOne({ organization: req.body.organization }).populate('donar').populate('hospital').sort({ createAt: -1 })
        res.status(200).send({
            message: "Inventory Result successfully",
            success: true,
            inventory
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: "something wrong while getting inventory",
            success: false,
        })
    }
}

module.exports = { createInventoryController, getInventoryController }

