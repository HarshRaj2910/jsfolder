const fs=require("fs");
console.log("Start")
const data =fs.readFile("college.txt","utf8",(err,data)=>{
if(err){
    throw err;
}
console.log(data);
});
console.log("File read successfully");