const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fName:{type:'String',required:true , min:3, max:50},
    lName:{type:'String'},
    email:{type:'String',unique:true,trim:true, lowerCase:true},
    password:{type:'String', validate(value){
                if(! validator.isStrongPassword(value))
                   {throw new Error ( value + ' is not a valid password')} 
   

    }},
    age:{type:'Number' ,min:18},
    gender:{type:'String',validate(value){
        if(! ["male","female", "others" ].includes(value))
             throw new Error ("gender should be male or female")}},
    photoUrl :{type:'String', validate(value){
               if(! validator.isURL(value))
                    throw new Error ("Please enter a valid URL")
               }},
    skills:{type:'String', required:true},
    about:{type:'String', required:true, default:'this is the default value'}
    
} , {timestamps:true})

module.exports = mongoose.model('user',userSchema);