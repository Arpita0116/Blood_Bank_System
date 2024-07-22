let express = require("express")
const authorizeUser = require("../middleware/authMiddleware")
const { analyticsController } = require("../controllers/analyticsController")
let analyticsRoute = express.Router()
analyticsRoute.get("/analytics", authorizeUser, analyticsController)
module.exports = analyticsRoute