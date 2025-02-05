const express = require('express');

const app = express();
const port = 7777;
const dbConnection = require('./src/config/db');
const User = require('./src/models/userModel');
const bcrypt = require('bcrypt');
//post
app.use(express.json())
const {validateSignUp} = require('./src/utility/validation');
//const signValidator = require('./src/utility/signValidator');

app.post('/signup', async (req,res) =>
    {
        try{
            const {fName,lName,password,email,photoUrl,skills} = req.body;
            validateSignUp(req);
            const hashPassword = await bcrypt.hash(password,10);
            console.log(hashPassword);
             // const user = new User(req.body); this is not the proper way to
             const user = new User({fName,lName,password:hashPassword,email,photoUrl,skills});
       
            await user.save();
            res.send('user is inserted..');
        }
        catch(err){res.status(400).send("User is not inserted.. " + err.message)}
       
    })
app.get('/login',async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user =await  User.findOne({email:email});
        if(!user)
            res.status(201).send('User not found');

        const checkpassword = await bcrypt.compare(password,user.password);
        //one is your password which you entered and other is the bcrypted passw("RushdaGadhiya123","$2b$10$XNrPfN1wCHt4Ko1v.2IaYu3Z6N8UE0FU0l6AfJV30x6sWV3iIZa/2")
       
       if(checkpassword)
            res.status(200).send("Login successfully..")
    }catch(err){res.status(401).send("User can not login.. " + err.message);}
})
//get   userone First

app.get('/users', async(req, res) => {
    const user = await User.findOne({});
    console.log(user);
    res.status(200).send(user);
})

app.get('/usersEmail', async (req,res) => {
    const mail = req.body.email
   const user = await User.find({ email : mail }) 
   res.send(user);
})
//get All Documents of user
app.get('/allUsers', async (req, res) => {
    try{
            const users = await User.find({});
           
            if(users.length > 0){
                res.status(200).send(users)
            }
            else{
                res.status(400).send('No users available')
            }
        }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})
//delete by Id
app.delete('/delete',async(req,res) => {
    const userId = req.body.userId;
    console.log(userId);
    try{
       
        const user = await User.findByIdAndDelete({_id:userId});
        res.status(200).send("user is deleeted successfully")
    }
    catch(err){ res.status(500).send(err); 
        console.log(err);
    }

})
//update by Id
app.patch('/user/:userId',async(req,res)=>{
    
  //  const userId = req.body._id;
  const userId = req.params?.userId;
    const data = req.body;
    try{
        //only those fiedls which you want to update
        //restricted email - password etc.
        const allowUpdate = ["_id","fName","lName","age","gender","skills","photoUrl"];
        const isUpdatedAllow = Object.keys(data).every((k) => allowUpdate.includes(k));
        console.log(Object.keys(data));
        if(!isUpdatedAllow )
        {
            throw new Error(`User ${userId} is not allowed to update`);
        }

       const user =  await User.findByIdAndUpdate(userId, data, {returnDocument:'after'});
      // console.log(userId,data);
       console.log(user)
        res.send('user is updated');
    }
    catch(err){ res.send('user not updated ' + err)}
})
//update by email
app.patch('/userEmail',async(req,res)=>{
    try{
        const emailId = req.body.email;
        console.log(emailId);
        const findUser = await User.findOneAndUpdate({email: emailId},req.body);       
        res.send('update user successfully');       
    }
    catch(err){
        res.send('not updated' + err)}
})


dbConnection().then(() => {
    console.log('connection established');
    app.listen(port, ()=> console.log('listening on port ' + port));
}).catch(err => console.log('error connecting to database: ' + err));

