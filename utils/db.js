const mongoose = require('mongoose')
const db_connect = async () => {
  try {
    if (process.env.MODE === 'production') {
      await mongoose.connect(process.env.DB_PRODUCTION_URL);
      console.log('Production database connected.');
    } else {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Local database connected.');
    }

  } catch (error) {
    console.log(error)
  }
}

module.exports = db_connect