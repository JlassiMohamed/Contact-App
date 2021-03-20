const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        let result = await mongoose.connect(
          process.env.DB_URI,
          { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Database connected..")
    } catch (error) {
        
    }
}

module.exports = dbConnect;