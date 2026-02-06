const { signup, login}=require('../Controllers/AuthController'); // import the signup and login functions from the AuthController file
const router=require('express').Router(); // create a new router object using the Express framework

router.post('/login',login); // define a POST route for the login endpoint, which will call the login function when a request is made to this endpoint
router.post('/signup',signup); // define a POST route for the signup endpoint, which will call the signup function when a request is made to this endpoint

module.exports=router; // export the router object so that it can be used in other parts of the application