const UserController=require("../controller/UserController")
const express=require("express")
const router=express.Router()

router.post("/register",UserController.createUser);
router.get("/viewuser",UserController.getUser); 
router.get("/viewuser/:id",UserController.getUserById);
router.put("/updateUser/:id",UserController.updateUser);  
router.delete("/deleteUser/:id",UserController.deleteUser); 
module.exports=router; 