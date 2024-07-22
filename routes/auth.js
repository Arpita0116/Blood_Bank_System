let express = require('express')

const { registerController, loginController, getCurrentUserController } = require('../controllers/userController')

const authorizeUser = require('../middleware/authMiddleware')

let route = express.Router()

route.post('/register', registerController)

route.post('./login', loginController)

route.get('/current-user', authorizeUser, getCurrentUserController)

module.exports = route