let express = require('express')
let app = express()
let dotenv = require('dotenv')
let cors = require('cors')
//let colors = require('colors')
let morgan = require('morgan')
const databaseConnection = require('./config/db')
const route = require('./routes/auth')
const inventoryRoute = require('./routes/inventoryRoute')
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
databaseConnection()

app.use('/auth/v1', route)
app.use('/inventory/v1', inventoryRoute)
let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is Running At ${PORT}`);
})