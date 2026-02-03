const http=require('http');
const url=require('url');
const server= http.createServer((req,res)=>{
    const {query}=url.parse(req.url,true);
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(query));
});
server.listen(3000, () => console.log('Server started'));