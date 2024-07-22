const mongoose = require("mongoose")
const inventoryModel = require("../models/inventoryModel")

let analyticsController = async (req, res, next) => {
    try {
        const bloods = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]
        let bloodGroupData = []
        let userId = new mongoose.Types.ObjectId(req.userId)

        await Promise.all(
            bloods.map(async (blood) => {
                const totalIn = await inventoryModel.aggregate([
                    {
                        $match: {
                            bloodGroup: blood,
                            inventoryType: "in",
                            organization: userId,
                        },
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: "$quantity" },
                        },
                    },
                ])

                const totalOut = await inventoryModel.aggregate([
                    {
                        $match: {
                            organization: userId,
                            inventoryType: "out",
                            bloodGroup: blood,
                        },
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: "$quantity" },
                        },
                    },
                ])

                const availableBlood = (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0)

                bloodGroupData.push({
                    bloodGroup: blood,
                    totalIn: totalIn[0]?.total,
                    totalOut: totalOut[0]?.total,
                    availableBlood,
                })
            })
        )

        res.status(200).send({
            message: "Fetched Blood for Analytics",
            bloodGroupData,
            success: true,
        })
    }
    catch (e) {
        console.log(e)
        res.status(500).send({
            message: "Something wrong while fetching the data",
            success: false,
            e,
        })
    }
}
module.exports = { analyticsController }