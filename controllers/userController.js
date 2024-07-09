let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")
const { raw } = require('express')


// this is for the registration
let registerController = async (req, res, next) => {
    try {
        if (!req.body.email)
            return res.status(404).send({ message: "All field are requied*", success: false })
        let existUser = await userModel.findOne({ email: req.body.email })
        if (existUser) return res.status(200).send({ message: "User is Alradey Registered", success: false })
        if (!req.body.password) return res.status(404).send({ message: "All field are requird*", success: false })

        let salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(req.body.password, salt)
        let newUser = new userModel({ ...req.body, password: hashPassword })
        await newUser.save()
        res.status(201).send({
            message: "User Registered Successfully",
            success: true,
            newUser
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Something went wrong",
            success: false,
            error
        })
    }
}
// this is login and genrating token 
let loginController = async (req, res, next) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.role)
            return res.status(401).send
                ({ message: "All field are requied*" })

        let findData = await userModel.findOne({ email: req.body.email })
        if (!findData) return res.status(400).send({
            message: "Either email or password is invaild",
            success: false
        })
        if (findData.role != req.body.role) throw new Error('Invalid Account')

        let comparePassword = await bcrypt.compare(req.body.password, findData.password)
        if (!comparePassword) return res.status(400).send({
            message: "Either email or password is invalid",
            success: false
        })

        let token = await jwt.sign({ userId: findData._id },
            process.env.SECRET_KEY, { expiresIn: '20days' })
        res.status(200).send({
            message: "Login Successfully",
            success: true,
            token,
            user: findData
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Something went wrong",
            success: false,
            error
        })
    }
}

// current-user details
let getCurrentUserController = async (req, res, next) => {
    try {
        let userId = req.userId
        let user = await userModel.findOne({ _id: userId })
        res.status(200).send({
            message: "User Get Succes",
            success: true,
            user
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Something went wrong,while fetching current user",
            success: false,
            err
        })

    }
}
module.exports = { registerController, loginController, getCurrentUserController }