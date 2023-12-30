const express=require('express')
const app=express();
require('dotenv').config();
require('./helpers/conn')
const PORT=process.env.port || 3000
app.listen(PORT,()=>
{
    console.log(`server is connected to port: ${PORT}`);
})