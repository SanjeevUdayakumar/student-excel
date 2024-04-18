const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send('Welcome')
})
app.post('/save',(req,res)=>{
    console.log('saved');
})
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})