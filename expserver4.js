const express = require("express");
const app=express();

app.use(express.urlencoded());

app.post("/students", (req,res)=>{
    res.send(`Student ${req.body.username}`);
});

app.listen(3000, ()=>console.log("Server started at http://localhost:3000"));