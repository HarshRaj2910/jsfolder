const express=require('express');
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const userRouter=require('./routes/Router')
const multer=require("multer")

const app=express();
const PORT=5000;

// enable CORS so frontend can call this API
app.use(cors());

app.use(bodyParser.json())
app.use('/uploads', express.static('upload')); // serve static files

// configure storage destination and filenames
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname);
    }
})

app.use('/api',userRouter)

mongoose.connect('mongodb://0.0.0.0:27017/my_db')
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log("Cannot connect to the Database")); 

app.listen(PORT,() => console.log('Server running'));