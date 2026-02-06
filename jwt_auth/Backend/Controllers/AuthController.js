const bcrypt =require('bcrypt');
const jwt= require('jsonwebtoken');
const UserModel=require('../Models/User');
const { model } = require('mongoose');

const signup=async(req,res)=>{   // signup function is an asynchronous function that takes in a request and response object as parameters. 
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

const login=async(req,res)=>{  // login function is an asynchronous function that takes in a request and response object as parameters.
    try{
        const{email,password}=req.body;  // extract email and password from the request body
        const user=await UserModel.findOne({email});  // check if user with the provided email exists in the database       
        if(!user){
            return res.status(409)
            .json({message:'User does not exist, please signup',
                success:false});  // if user does not exist, login fails
        } 
        const isPassEqual= await bcrypt.compare(password,user.password); // compare the provided password with the hashed password stored in the database, if the passwords do not match, login fails,if matches, login is successful and a JWT token is generated and sent back to the client
        if(!isPassEqual){
            return res.status(403)
            .json({message:'Invalid password',
                success:false});
        }

        // very important part is jwt token generation

        const jwtToken=jwt.sign(  // generate a JWT token using the user's ID and a secret key
                {email:user.email,_id:user._id},
                process.env.JWT_SECRET,    // secret key is stored in an environment variable for security reasons
                {expiresIn:'24h'}           // token will expire in 24 hours.
        )

        res.status(200).json({   // if login is successful, send a response with a success message, the generated JWT token, and the user's email and name.
            message:"Login Success",
            success:true,
            jwtToken,
            email,
            name:user.name});
        

    }catch(err){
        res.status(500).json({message:"Internal server error",success:false});
    }
}
model.exports={signup,login};