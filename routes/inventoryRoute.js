let express = require('express')

const auhtorizeUser = require('../middleware/authMiddleware')

const { createInventoryController,
    getInventoryController,
    getDonarController,
    getHospitalController,
    getOrganizationControllerForDonar,
    getOrganizationControllerForHospital,
    getHospitalNameController,
    getDonarNameController,
    getConsumerAndDonationDataController
} = require('../controllers/inventoryController')

const authorizeUser = require('../middleware/authMiddleware')

let inventoryRoute = express.Router()

inventoryRoute.post('/create-inventory', auhtorizeUser, createInventoryController)

inventoryRoute.get('/get-inventory', auhtorizeUser, getInventoryController)

inventoryRoute.get('/get-donar', auhtorizeUser, getDonarController)

inventoryRoute.get('/get-hospital', auhtorizeUser, getHospitalController)

inventoryRoute.get('/get-org-donar', auhtorizeUser, getOrganizationControllerForDonar)

inventoryRoute.get('/get-org-hospital', auhtorizeUser, getOrganizationControllerForHospital)

inventoryRoute.get('/get-hospital-name', auhtorizeUser, getHospitalNameController)

inventoryRoute.get('/get-donar-name', auhtorizeUser, getDonarNameController)

inventoryRoute.post('/get-consumer-donation', authorizeUser, getConsumerAndDonationDataController)
module.exports = inventoryRoute