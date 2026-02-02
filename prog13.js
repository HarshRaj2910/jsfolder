// async write file
const fs=require("fs");
console.log("Start")
const value="This is our new text.";
fs.writeFile("example.txt",value,(err)=>
{
    if(err)
    {
        throw err;
    }
    console.log("File written succesfully");
});
console.log("Finished work");