const express=require('express')
const app=express();
const userRouter=require('./routes/user_router')
const bodyParser=require('body-parser')
require('dotenv').config(); 
const morgan=require('morgan')
require('./helpers/conn')

const PORT=process.env.port || 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use('/api/v1/users',userRouter)
app.listen(PORT,()=>
{
    console.log(`server is connected to port: ${PORT}`);
})