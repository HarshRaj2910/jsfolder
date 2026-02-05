
// first rest api

const User=require("../models/User")
const createUser=async(req,res)=>{
    try{
        const {name,email,password,country,gender}=req.body;
        const user=new User({name,email,password,country,gender});
        await user.save()
        res.status(201).json(user);

    } catch(err)
    {
        res.status(500).json({error:err.message});

    }
}
// second api
const getUser=async (req,res)=> {
    try{
        const user=await User.find();
        res.json(user);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

// get a particular user by id
const getUserById=async (req,res)=>{
   try{
    const user=await User.findById(req.params.id);
    if(!user)return res.status(404).json({message:"User not found"});
    res.json(user);
} catch(err){
    res.status(500).json({error:err.message});
}
}

// update user 
const updateUser=async (req,res)=> {
    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateUser)
            return res.status(404).json({error:err.message});
    } catch(err){
        res.status(500).json({error:err.message});

    }
}
// delete user
const deleteUser=async(req,res)=>{
    try{
        const deleteuser= await User.findByIdAndDelete(req.params.id);
        if(!deleteuser)
            return res.status(404).json({message:"USer not found"});
        res.json({message:'User deleted succcessfully'});
    }catch(err){
        res.status(500).json({error:err.message});

    }
}
module.exports={createUser,getUser,getUserById,updateUser,deleteUser}; 