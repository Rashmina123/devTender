const express = require('express');
const dbConnection = require('./src/config/db');
const port = 7777;
const app = express();
const User = require('./src/model/userModel');

try{   
    //  app.get('/user',(req,res) => res.send('get userData'));

  app.post('/signup', async(req,res)=>{
      
      const user = new User({fName:'Yasin',lName:'Gadhiya', password:'raas',email:'rashmina@gmail.com'});
      await user.save();
      res.send('user saved successfully')
      console.log('User saved successfully');
  
  })
  } catch(err) {console.error(err);}


dbConnection()
    .then(() => {
        app.listen(port, () => { console.log("server is listening on port - " + port); });

        console.log('Database connected successfully.')
     })
      .catch((e) => {console.log('Error in db connection --- ' + e.message)})

