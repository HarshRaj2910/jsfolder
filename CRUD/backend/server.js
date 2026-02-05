const express=require('express');
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const userRouter=require('./routes/Router')

const app=express();
const PORT=5000;

app.use(bodyParser.json())

app.use('/api',userRouter)

mongoose.connect('mongodb://0.0.0.0:27017/my_db')
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log("Cannot connect to the Database")); 

app.listen(PORT,() => console.log('Server running'));