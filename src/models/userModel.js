const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fName:{type:'String',required:true , min:3, max:50},
    lName:{type:'String'},
    email:{type:'String',unique:true,trim:true, lowerCase:true},
    password:{type:'String'},
    age:{type:'Number' ,min:18},
    gender:{type:'String',validate(value){
        if(! ["male","female", "others" ].includes(value))
             throw new Error ("gender should be male or female")}},
    skills:{type:'String', required:true},
    about:{type:'String', required:true, default:'this is the default value'}
    
} , {timestamps:true})

module.exports = mongoose.model('user',userSchema);