const express = require('express');
const {adminAuth} = require("./Auth/autho.js");
const {userAuth} = require("./Auth/autho.js");
const port = 3000;
const app = express();


app.use("/admin" , adminAuth);

  


app.use("/admin/getAllData",(req,res)=>{
  //check Authorization
 
res.send('AllData sent')
})

app.use("/admin/DeleteUser",(req,res)=>{
  res.send('Deleted a User')
})

app.use("/user", userAuth);
app.get('/user/getData' , (req,res) => {
  res.send('UserData sent ');
})
app.listen(port,() => { console.log("server listen on port - " + port); }); 
