const express = require('express');
const port = 3000;
const app = express();

app.use("/admin" , (req,res,next) =>{
  console.log("admin auth is getting checked");
  const token = req.params.token || "aaa";
  const isAuthenticated = token ==="aaa";
  if(!isAuthenticated){
    res.status(401).send("UnAuthorized")
  }
  else{ next();}
});

app.use("/admin/getAllData",(req,res)=>{
  //check Authorization
 
res.send('AllData sent')
})

app.use("/admin/DeleteUser",(req,res)=>{
  res.send('Deleted a User')
})

app.listen(port,() => { console.log("server listen on port - " + port); }); 
