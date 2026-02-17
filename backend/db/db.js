const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://lang:XBIwKpsSWwY4WTdV@crud.b3wxdhl.mongodb.net/crud");
        console.log("[DataBase] Connected to MongoDB");
    } catch (err) {
        console.log("[ERROR] Error connecting to MongoDB: ", err);
        process.exit(1); // Exit the process with an error code
    }
};

module.exports = connectDB;