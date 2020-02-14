const express = require('express');

const app=express();

app.use(express.static(__dirname+'/'+'Client'));
// env
const port= process.env.PORT||9000;

app.listen(port,()=>{console.log('Hi i am the server')});




