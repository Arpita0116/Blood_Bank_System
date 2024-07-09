let mongoose = require('mongoose')
//let colors = require('colors')
let databaseConnection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/blood`)
        console.log('Database connected Successfully')
    }
    catch (error) {
        console.log(`something wrong in database connection`);
    }
}
module.exports = databaseConnection