const fs=require("fs");
console.log("First")
 data =fs.readFileSync("college.txt","utf8");
console.log(data);
console.log("file read sucessful");