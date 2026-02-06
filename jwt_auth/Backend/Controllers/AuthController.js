const bcrypt =require('bcrypt');
const jwt= require('jsonwebtoken');
const UserModel=require('../Models/User');

const signup=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await UserModel.findOne({email});  // check if user with the same email already exists
        if(user){
            return res.status(409)
            .json({message:'User already exists, you can login',
                success:false});  // if user already exists, registration fails
        } 
        const userModel=new UserModel({name,email,password});  // new user data will be stored in the database
        userModel.password=await bcrypt.hash(password,10); // password will be hashed(10 is the number of rounds for hashing, higher number means more secure but slower, password will be incrpypted and stored in the database)
        await userModel.save();  // save the new user to the database
        res.status(201).
        json({
            message:"User created successfully",
            success:true});
    }catch(err){
        res.status(500).json({message:"Internal server error",success:false});
    }
}