const db_url = "mongodb+srv://ras123:ras123@namastenode.dlosy.mongodb.net/devTinder";
                //"mongodb+srv://ras123:ras123@namastenode.dlosy.mongodb.net/devTinder";
const mongoose = require("mongoose");
const connectDB = async() => {
    await mongoose.connect(db_url);
} 

module.exports = connectDB