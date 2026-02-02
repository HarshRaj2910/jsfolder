// sync write file
const fs=require("fs");
console.log("Start")
const value="Hello dear all.\nThis is a class on mern stack";
fs.writeFileSync("example.txt",value);
console.log("File written succefully");