const http=require('http');
PORT=5000;
const server=http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>This is our mern stack class</h1>"); 
});
server.listen(PORT,()=>console.log("Server standard"));