const validator = require("validator");
 const validateSignUp =(req)=>{
const {fName,lName, email, password} = req.body;
if(!fName || !lName)
    throw new Error ("PLease Enter Name must be")
else if(!validator.isEmail(email))
    throw new Error ("PLease Enter valid Email");


}


module.exports = {validateSignUp}