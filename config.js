const mongoose = require("mongoose");
require('dotenv').config();
const databaseUrl = process.env.MONGO_URL;
const initDB = async () => {
    try {
        await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        console.log("Connected to mongo DB");
    } catch (e) {
        console.log(e);
        // throw e;
    }
}
module.exports = initDB;