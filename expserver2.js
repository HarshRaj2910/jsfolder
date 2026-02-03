
const express=require("express")
const app=express()
app.get("/users",(req,res)=>{
    res.json(
        [
            {id:1, name:'alice'},
            {id:2,name:'Bob'}
        ]
    )
});
app.listen(4000,()=>console.log("Server started"));