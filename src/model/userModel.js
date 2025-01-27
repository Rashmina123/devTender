const mongoose = require('mongoose');

const db = require("../config/db");

const userSchema = new mongoose.Schema({
    fName:{ type:'String'},
    lName:{type:'String'},
    password:{type:'String'},
    age:{type:'Number'},
    email:{ type:'String'}
});
 const userModel = mongoose.model('user',userSchema);
 module.exports = userModel;
//module.exports =  mongoose.model('User',userShema);
