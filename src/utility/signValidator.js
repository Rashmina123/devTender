const mongoose = require('mongoose');
const validator = require('validator');
const signValidator=(req) =>{
    const {email} = req.body;
    if(validator.isEmail(email)){
        console.log('correct email');
}}