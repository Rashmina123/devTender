
const express = require ("express");


const app = express();
app.use("/a",(req,res) => res.send("testing /a regex response"));

app.use("/user",(req,res,next) => {
    console.log("First respones")
  //  res.send("First respones")
  
    next();
    res.send("First response")
})
app.use("/test",(req,res) => {
    console.log("First respones")
    res.send("First  /respones")
})
 console.log("test response")
app.listen(3000, ()=> console.log("Listening on http://localhost:3000  .. " ) );