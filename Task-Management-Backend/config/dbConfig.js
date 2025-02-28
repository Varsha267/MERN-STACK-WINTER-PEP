const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://varsha:varsha%40123@website.ovhiznx.mongodb.net/Task"
        );
        console.log("Database Connected ");
    } catch (err) {
        console.log("Database NOT Connected ");
    }
};

connectToDb();
