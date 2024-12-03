const mongoose = require("mongoose");

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected successfully");
    } catch (e) {
        console.error(`Error while connecting to MongoDB: ${e.message}`);
        throw e; // Rethrow the error after logging it
    }
};

module.exports = connectDB;
