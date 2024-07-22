let express = require("express")
let adminMiddleware = require("../middleware/adminMiddlware")
const authorizeUser = require("../middleware/authMiddleware")

const {
    donarListController,
    hospitalListController,
    deleteAdminController,
    organizationListController,
} = require("../controllers/adminController")

let adminRoute = express.Router()

adminRoute.get("/get-donar-list", authorizeUser, adminMiddleware, donarListController)

adminRoute.get("/get-hospital-list", authorizeUser, adminMiddleware, hospitalListController)

adminRoute.get("/get-organization-list", authorizeUser, adminMiddleware, organizationListController)

adminRoute.delete("/admin-delete/:id", authorizeUser, adminMiddleware, deleteAdminController)

module.exports = adminRoute