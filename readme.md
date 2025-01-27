git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Rashmina123/devTender.git
git push -u origin main

-----database-----  
1 create a free cluster on MongoDB
2 install mongoose library  
== module.exports =  mongoose.model('User',useShema);====
3 connect application to the database "connection-url"/devTinder

------------------------config - dbConnection.js  --------------------
const dbConnection = async() =>    { await mongoose.connect(dbConnection); }
dbConnection().then(() => console.log('connection done'))
            .catch(() => console.log('Error in connection'));
------------------------------------------------------------------------

4 call the connectDB function to connect to Database before application listnening
------------------------index.js ----------------                   
const dbConnection = require('./config/dbConnection.js);

5 create a userSchema & userModel
model folder - user.js
createa userSchema -- const mongoose= require('mongoose');
const userSchema = new mongoose.schema({fName:{ type: 'string'}}, ----);
const userModel = mongoose.model('user','userSchema');
module.exports = userModel ; or
module.exports = mongoose.model('user',userSchema');------------------------------------------------------------
create api for inserting Data
--create a userSchema instance and insert data using post method.


