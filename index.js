const express = require('express');

const app = express();
const port = 7777;
const dbConnection = require('./src/config/db');
const User = require('./src/models/userModel');
//post
app.use(express.json())
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
app.patch('/user',async(req,res)=>{
    
    const userId = req.body._id;
    const data = req.body;
    try{
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
app.post('/signup', async (req,res) =>
    {
        try{
            const user = new User(req.body);
           // console.log(req.body);
              // ( {fName:'Rushda',lName:'Gadhiya',email:'rus@gmail.com',password:'rus123',age:33,gender:'Male'}
                //);
            await user.save();
            res.send('user is inserted');
        }
        catch(err){console.log(err);}
       
    })

dbConnection().then(() => {
    console.log('connection established');
    app.listen(port, ()=> console.log('listening on port ' + port));
}).catch(err => console.log('error connecting to database: ' + err));

