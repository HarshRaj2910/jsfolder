const express=require("express")
const app=express()
app.use(express.json())
app.post('/data',(req,res)=>{
    res.json({
        message:'Data received successfully',
        received:req.body
    });
});
app.listen(4000,()=>console.log("Server started"));