const mongoose = require('mongoose');
const db_url = "mongodb+srv://ras123:ras123@namastenode.dlosy.mongodb.net/devTinder";
      
 const connectDb = async() =>  
    {
        await mongoose.connect(db_url) ;

     };
module.exports = connectDb;