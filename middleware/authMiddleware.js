let jwt = require('jsonwebtoken')
let authorizeUser = async (req, res, next) => {
    // console.log('dev test', req.headers.authorization)
    // console.log('..............................................................')
    // console.log('dev test 2', req.headers)
    try {
        let token = req.headers.authorization
        if (!token) return res.status(401).send
            ({ message: "User is not Authrized" })
        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if (err) return res.status(401).send
                ({ message: "User is not Authrized" })
            req.userId = decode.userId
            next()
        })
    }

    catch (error) {
        console.log(error)
        res.status(500).send({ message: "something wrong", success: false, error })
    }
}
module.exports = authorizeUser

