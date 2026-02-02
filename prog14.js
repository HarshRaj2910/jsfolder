// sync append file
const fs=require("fs");
console.log("Start")
const value="Hello dear all.\nThis is the append text.";
 const data=fs.appendFileSync("example.txt",value);
console.log("File written succefully");