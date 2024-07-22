let userModel = require("../models/userModel")

// For DonarList
let donarListController = async (req, res, next) => {
    try {
        let donars = await userModel
            .find({ role: "donar" })
            .sort({ createdAt: -1 })
        res.status(200).send({
            message: "All Donar List",
            donars,
            success: true,
            total: donars?.length,
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Something wrong!",
            success: false,
            e
        })
    }
}

// For HospitalList
let hospitalListController = async (req, res, next) => {
    try {
        let hospitals = await userModel
            .find({ role: "hospital" })
            .sort({ createdAt: -1 })
        res.status(200).send({
            message: "All Hospital List",
            hospitals,
            success: true,
            total: hospitals?.length,
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Something wrong!",
            success: false,
            e
        })
    }
}

// For organizationList
let organizationListController = async (req, res, next) => {
    try {
        let organization = await userModel
            .find({ role: "organization" })
            .sort({ createdAt: -1 })
        res.status(200).send({
            message: "All Organization List",
            organization,
            success: true,
            total: organization?.length,
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Something wrong!",
            success: false,
            e
        })
    }
}

// delete handler for org,hospital,donar
let deleteAdminHandler = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await userModel.findByIdAndDelete(id)
        if (result) {
            res.status(200).send({
                message: "Document Deleted Successfully",
                data: result,
                success: true,
            })
        }
        else {
            res.status(200).send({
                message: "Document Not Found",
                success: false,
            })
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Something wrong!",
            success: false
        })
    }
}


module.exports = { donarListController, hospitalListController, organizationListController, deleteAdminHandler }