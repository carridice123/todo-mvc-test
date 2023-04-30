const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.createConnection(process.env.DB_STRING).asPromise()

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
