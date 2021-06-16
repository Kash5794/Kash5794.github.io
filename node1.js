const express=require('express');
const path = require('path');
const app= express(); 
const log= console.log;
const sendMail= require('./mail');

const PORT =8080;
//Data parsing
app.use(express.urlencoded({
extended:false
}));
app.use(express.json());  

 app.post('/email', (req,res)=>{

const {subject,email,text}=req.body;

console.log('Data',req.body);

sendMail(email,subject,text,function(err,data){
if (err){
    res.status(500).json({message:'Internal error'});
} 
else{
res.json({message:"Email sent"})
console.log("Email Sent")
}
});  

 }); 
 


app.get('/', (req, res)=>{//server receiving a get method through route /
res.sendFile(path.join(__dirname, 'views','index.html'));//respond by sending webpage index.html 
});

app.listen(PORT, ()=> log("Server is running on PORT,", 8080));//waiting for call from port 8080