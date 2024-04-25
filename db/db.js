const mongoose = require('mongoose')
require('dotenv').config()

const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB)
        console.log('database connected successfully')
    } catch (error) {
        throw new Error('error connecting to database')
    }
}

module.exports = connectdb