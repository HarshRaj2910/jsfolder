const http=require('http');
const url=require('url');
const fs=require('fs');
const PORT=5000;
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const path=parsedUrl.pathname;
    const method=req.method;
    if(path==='/' && method==='GET')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Home Page</h1>');
    } else if (path==='/about' && method ==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About Page</h1>');

    }else if(path==='/user' && method ==='GET'){
        const id=parsedUrl.query.id;
        res.writeHead(200,{'Content-Type':'application/json'});
        if(id){
            res.end(JSON.stringify({id:id,name:'User'+id}));    
        } else {
            res.end(JSON.stringify([
                {
                    id:1,name:'Demo Name'
                }
            ]));
        }

    } else if(path==='/data' && method==='POST'){
        let body='';
        req.on('data',chunk => body += chunk);
        req.on('end',()=>{
            let parsedBody;
            try{
                parsedBody=JSON.parseBody(body)
            } catch{
                parsedBody={raw:body};
            }
        })

    }
})