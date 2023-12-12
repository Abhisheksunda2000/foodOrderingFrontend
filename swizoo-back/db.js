const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://temp_coder_2000:Qwertyui0p@cluster0.3p1f7mi.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Mongoose connected to MongoDB");
        });

        mongoose.connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectToDB;
