let express = require('express')
const auhtorizeUser = require('../middleware/authMiddleware')
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController')
let inventoryRoute = express.Router()

inventoryRoute.post('/create-inventory', auhtorizeUser, createInventoryController)
inventoryRoute.get('/get-inventory', auhtorizeUser, getInventoryController)
module.exports = inventoryRoute