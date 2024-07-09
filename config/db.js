let mongoose = require('mongoose')
let colors = require('colors')
let databaseConnection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/blood`)
        console.log('Database connected Successfully'.bgMagenta.green)
    }
    catch (error) {
        console.log(`something wrong in database connection`.bgBlue.white);
    }
}
module.exports = databaseConnection