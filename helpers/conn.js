const mongoose=require('mongoose')
require('dotenv').config()
let URL=process.env.url
mongoose.connect(URL)
.then(()=>
{
    console.log(`connected to url: ${URL}`);
})
.catch((error)=>
{
    console.log(error.message);
})